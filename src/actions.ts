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
  if (!userId) return { error: 'Usuario no autenticado' };

  const type = 'envia';
  const cellular = formData.get('cel');
  const customerId = parseInt(userId, 10);
  const amount = formData.get('value');
  const description = formData.get('description');

  try {
    const query = await sql(`SELECT id FROM "Customers" WHERE cellular = $1 `, [cellular]);

    console.log('destino', query[0].id);
    const destinationId = query[0].id;

    await sql(
      `INSERT INTO "Transactions" ("type","destination_id", "destination","customer_id","amount","description") VALUES ($1, $2, $3, $4, $5, $6)`,
      [type, destinationId, cellular, customerId, amount, description],
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
  if (!userId) return { error: 'Usuario no autenticado' };

  const type = 'recarga';
  const cellular = formData.get('cel');
  const customerId = parseInt(userId, 10);
  const amount = formData.get('value');

  try {
    const query = await sql(`SELECT id FROM "Customers" WHERE cellular = $1 `, [cellular]);

    console.log('destino', query[0].id);
    const destinationId = query[0].id;

    await sql(
      `INSERT INTO "Transactions" ("type","destination_id", "destination","customer_id","amount") VALUES ($1, $2, $3, $4, $5)`,
      [type, destinationId, cellular, customerId, amount],
    );
  } catch (error) {
    console.error('Error creating transfer:', error);
    return { error: 'Error en la transacción' };
  }
}
