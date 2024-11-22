'use client';

export default function Withdraws() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form className="min-w-80 rounded-xl border p-8 text-sm font-semibold">
        <h2 className="pb-4 text-2xl font-semibold text-indigo-900">Retira</h2>
        <div className="flex flex-col pb-2">
          <label htmlFor="method">Medio de retiro</label>
          <select className="rounded-xl border p-2" name="method" id="method">
            <option value="correspondent">Corresponsal</option>
            <option value="atm">Cajero</option>
          </select>
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="value">Monto a retirar</label>
          <input className="rounded-xl border p-2" type="number" />
        </div>
        <input
          className="w-full rounded-xl bg-indigo-900 p-2 text-white hover:bg-indigo-600"
          type="button"
          value="Retirar"
          onClick={() => {}}
        />
      </form>
    </div>
  );
}
