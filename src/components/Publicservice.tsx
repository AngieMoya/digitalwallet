'use client';
import { newPublicService } from '@/actions';
import { useActionState } from 'react';

export default function PublicService() {
  const [state, formAction] = useActionState(newPublicService, null);
  return (
    <div className="flex w-96 flex-col rounded-xl border p-4">
      <form className="flex flex-col items-center" action={formAction}>
        <div className="flex w-full flex-col pb-2">
          <label htmlFor="services">Selecciona el servicio</label>
          <select className="rounded-xl border p-2" name="services" id="services">
            <option value="water">TripeA</option>
            <option value="energy">Air-e</option>
            <option value="gas">Gases del caribe</option>
          </select>
        </div>
        <div className="flex w-full flex-col pb-2">
          <label htmlFor="reference">Número de referencia</label>
          <input
            className="rounded-xl border p-2"
            type="text"
            name="reference"
            id="reference"
            pattern="\d{10}"
            maxLength={10}
            required
          />
        </div>
        <div className="flex w-full flex-col pb-4">
          <label htmlFor="value">Valor a cancelar</label>
          <input className="rounded-xl border p-2" type="number" name="value" id="value" required />
        </div>
        <input
          className="w-full rounded-xl bg-indigo-900 p-2 font-semibold text-white hover:bg-indigo-700"
          type="submit"
          value="Pagar"
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
