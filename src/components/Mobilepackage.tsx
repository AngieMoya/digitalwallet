export default function MobilePackage() {
  return (
    <div className="flex w-96 flex-col rounded-xl border p-4">
      <div className="flex w-full flex-col pb-2">
        <h2 className="text-xl font-semibold text-indigo-900">Tigo</h2>
        <div className="flex w-full flex-col pb-4">
          <label htmlFor="packages">Selecciona el paquete</label>
          <select className="rounded-xl border p-2" name="packages" id="packages">
            <option value="package1">datos $10.000</option>
            <option value="package2">minutos $6.000</option>
          </select>
        </div>
        <input
          className="rounded-xl bg-indigo-900 p-2 font-semibold text-white hover:bg-indigo-700"
          type="button"
          value="Comprar"
        />
      </div>
      <div className="flex w-full flex-col pb-2">
        <h2 className="text-xl font-semibold text-red-800">Claro</h2>
        <div className="flex w-full flex-col pb-4">
          <label htmlFor="packages">Selecciona el paquete</label>
          <select className="rounded-xl border p-2" name="packages" id="packages">
            <option value="package1">datos $10.000</option>
            <option value="package2">minutos $6.000</option>
          </select>
        </div>
        <input
          className="rounded-xl bg-red-800 p-2 font-semibold text-white hover:bg-red-600"
          type="button"
          value="Comprar"
        />
      </div>
    </div>
  );
}
