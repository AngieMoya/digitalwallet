'use client';

import { getUser } from '@/actions';
import Link from 'next/link';
import { useActionState } from 'react';

export default function Login() {
  const [state, formAction] = useActionState(getUser, null);
  return (
    <div className="flex flex-col items-center rounded-xl bg-teal-400 p-8">
      <h2 className="text-xl font-bold text-indigo-900">Digital Wallet</h2>
      <form className="p-4 text-sm text-white" action={formAction}>
        <div className="flex flex-col pb-2">
          <label htmlFor="cel">Número celular</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="tel"
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            name="cel"
            placeholder="Número Celular"
            id="cel"
            required
          ></input>
        </div>
        <div className="flex flex-col pb-6">
          <label htmlFor="password">Clave</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="password"
            inputMode="numeric"
            pattern="\d{4}"
            maxLength={4}
            name="password"
            placeholder="Clave (4 dígitos)"
            id="password"
            required
          ></input>
        </div>

        <input className="w-full rounded-xl bg-indigo-900 p-2" type="submit" value="Entrar" />
        {state?.error && (
          <p className="mt-2 font-semibold text-red-700" role="alert">
            {state.error}
          </p>
        )}
        <Link className="font-semibold text-indigo-900" href={'/sign-up'}>
          No tienes cuenta?
        </Link>
      </form>
    </div>
  );
}
