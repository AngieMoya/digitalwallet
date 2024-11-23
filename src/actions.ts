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
