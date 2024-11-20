export default function Withdraws() {
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      <form className="font-semibold p-8 text-sm border rounded-xl min-w-80">
        <h2 className="text-2xl font-semibold text-indigo-900 pb-4">Retira</h2>
        <div className="flex flex-col pb-2">
          <label htmlFor="method">Medio de retiro</label>
          <select className="border rounded-xl p-2" name="method" id="method">
            <option value="correspondent">Corresponsal</option>
            <option value="atm">Cajero</option>
          </select>
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="value">Monto a retirar</label>
          <input className="border rounded-xl p-2" type="number" />
        </div>
        <input
          className="rounded-xl p-2 bg-indigo-900 w-full text-white hover:bg-indigo-600"
          type="button"
          value="Retirar"
        />
      </form>
    </div>
  );
}
