'use server';
import { neon } from '@neondatabase/serverless';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function getUser(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);
  const cellular = formData.get('cel');
  const password = formData.get('password');
  let query = null;
  try {
    query = await sql(`SELECT * FROM "Customers" WHERE cellular = $1 AND password = $2`, [cellular, password]);
    console.log('RES', query);
    if (!!query.length) {
      const user = query[0];
      (await cookies()).set('userId', user.id.toString());
      (await cookies()).set('cellular', user.cellular.toString());
    } else return { error: 'Usuario no registrado o credenciales incorrectas' };
  } catch (error) {
    console.error('Error fetching user:', error);
    return { error: 'Failed to fetch user' };
  }
  if (!!query) {
    redirect('/wallet');
  }
}

export async function getBalance() {
  const sql = neon(process.env.DATABASE_URL || '');

  // Get the user ID from the cookie
  const userId = (await cookies()).get('userId')?.value;

  if (!userId) {
    return { error: 'User not authenticated' };
  }

  try {
    const query = await sql`
        SELECT balance FROM "Customers" WHERE id = ${parseInt(userId)}
      `;

    if (query.length > 0) {
      return { balance: query[0].balance };
    } else {
      return { error: 'User not found' };
    }
  } catch (error) {
    console.error('Error fetching balance:', error);
    return { error: 'Failed to fetch balance' };
  }
}

export async function newUser(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);
  const name = formData.get('name');
  const lastname = formData.get('lastname');
  const cellular = formData.get('cel');
  const password = formData.get('password');
  try {
    await sql(`INSERT INTO "Customers" ("name", "lastname", "cellular", "password") VALUES ($1, $2, $3, $4)`, [
      name,
      lastname,
      cellular,
      password,
    ]);
  } catch (error) {
    console.error('Error creating user:', error);
    return { error: 'Error al crear nuevo usuario' };
  }
  redirect('/');
}

export async function newTransfer(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const type = 'envia';
  const destination = formData.get('cel');
  const customerId = parseInt(userId, 10);
  const amount = formData.get('value');
  const description = formData.get('description');

  try {
    const query = await sql(`SELECT id FROM "Customers" WHERE cellular = $1 `, [destination]);

    console.log('destino', query[0].id);
    const destinationId = query[0].id;

    await sql(
      `INSERT INTO "Transactions" ("type","destination_id", "destination","origin","customer_id","amount","description") VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [type, destinationId, destination, cellular, customerId, amount, description],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}

export async function newReload(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const type = 'recarga';
  const destination = formData.get('cel');
  const customerId = parseInt(userId, 10);
  const amount = formData.get('value');

  try {
    const query = await sql(`SELECT id FROM "Customers" WHERE cellular = $1 `, [destination]);

    console.log('destino', query[0].id);
    const destinationId = query[0].id;

    await sql(
      `INSERT INTO "Transactions" ("type","destination_id", "destination","origin","customer_id","amount") VALUES ($1, $2, $3, $4, $5, $6)`,
      [type, destinationId, destination, cellular, customerId, amount],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}

export async function newWithdraw(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const type = 'retira';
  const customerId = parseInt(userId, 10);
  const amount = formData.get('value');

  try {
    const query = await sql(`SELECT cellular FROM "Customers" WHERE id = $1 `, [customerId]);

    console.log('destino', query[0].cellular);
    const destination = query[0].cellular;

    await sql(
      `INSERT INTO "Transactions" ("type","atm_id","destination_id", "destination","origin","customer_id","amount") VALUES ($1, $2, $3, $4, $5, $6,$7)`,
      [type, 1, null, destination, cellular, customerId, amount],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}

export async function newMovements() {
  const sql = neon(process.env.DATABASE_URL || '');

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const customerId = parseInt(userId, 10);

  try {
    const query = await sql(
      `
  SELECT 
    date, 
    type,
    destination,
    origin, 
    amount, 
    description 
  FROM "Transactions" 
  WHERE destination_id = $1 
     OR customer_id = $1
  `,
      [customerId],
    );
    console.log('query:', query);

    const movements = query;
    return movements;
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}

export async function newPublicService(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const customerId = parseInt(userId, 10);
  const type = 'servicio';
  const name = formData.get('services');
  const reference = formData.get('reference');
  const amount = formData.get('value');

  try {
    await sql(
      `INSERT INTO "Transactions" ("type", "destination","origin","customer_id","amount", description) VALUES ($1, $2, $3, $4, $5, $6)`,
      [type, reference, cellular, customerId, amount, name],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}

export async function newMobileServices(prevState: unknown, formData: FormData) {
  const sql = neon(process.env.DATABASE_URL || '');
  console.log(formData);

  const userId = (await cookies()).get('userId')?.value;
  const cellular = (await cookies()).get('cellular')?.value;
  if (!userId || !cellular) return { error: 'Usuario no autenticado' };

  const customerId = parseInt(userId, 10);
  const type = 'servicio';
  const product = formData.get('product');
  const destination = formData.get('cel');

  try {
    const query = await sql(`SELECT amount FROM "Services" WHERE description = $1`, [product]);
    const price = query[0].amount;

    await sql(
      `INSERT INTO "Transactions" ("type", "destination","origin","customer_id","amount", description) VALUES ($1, $2, $3, $4, $5, $6)`,
      [type, destination, cellular, customerId, price, product],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}
