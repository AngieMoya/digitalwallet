'use client';
import { newMobileServices } from '@/actions';
import { useActionState } from 'react';

export default function MobilePackage() {
  const [state, formAction] = useActionState(newMobileServices, null);
  return (
    <div className="flex w-96 flex-col rounded-xl border p-4">
      <form className="flex flex-col items-center" action={formAction}>
        <div className="flex w-full flex-col pb-2">
          <h2 className="text-xl font-semibold text-indigo-900">Paquetes Moviles</h2>
          <div className="flex w-full flex-col pb-4">
            <label htmlFor="packages">Selecciona el paquete</label>
            <select className="rounded-xl border p-2" name="product" id="product">
              <option value="datos">datos $10.000</option>
              <option value="minutos">minutos $6.000</option>
            </select>
          </div>
          <div className="flex w-full flex-col pb-4">
            <label htmlFor="packages">Digita el número</label>
            <input
              className="rounded-xl border p-2"
              type="tel"
              inputMode="numeric"
              name="cel"
              pattern="\d{10}"
              maxLength={10}
              id="cel"
              required
            />
          </div>
          <input
            className="rounded-xl bg-indigo-900 p-2 font-semibold text-white hover:bg-indigo-700"
            type="submit"
            value="Comprar"
          />
          {state?.error && (
            <p className="mt-2 font-semibold text-red-700" role="alert">
              {state.error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
