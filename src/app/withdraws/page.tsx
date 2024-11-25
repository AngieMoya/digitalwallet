'use client';

import { newWithdraw } from '@/actions';
import { useActionState } from 'react';

export default function Withdraws() {
  const [state, formAction] = useActionState(newWithdraw, null);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form className="min-w-80 rounded-xl border p-8 text-sm font-semibold" action={formAction}>
        <h2 className="pb-4 text-2xl font-semibold text-indigo-900">Retira</h2>
        <div className="flex flex-col pb-4">
          <label htmlFor="value">Monto a retirar</label>
          <input className="rounded-xl border p-2" type="number" name="value" id="value" required />
        </div>
        <input
          className="w-full rounded-xl bg-indigo-900 p-2 text-white hover:bg-indigo-600"
          type="submit"
          value="Retirar"
        />
        {state?.error && (
          <p className="mt-2 font-semibold text-red-700" role="alert">
            {state.error}
          </p>
        )}
      </form>
    </div>
  );
}
