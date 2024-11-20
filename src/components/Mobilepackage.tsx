export default function MobilePackage() {
  return (
    <div className="p-4 flex flex-col border rounded-xl w-96">
      <div className="flex flex-col pb-2 w-full">
        <h2 className="text-xl font-semibold text-indigo-900">Tigo</h2>
        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="packages">Selecciona el paquete</label>
          <select
            className="p-2 border rounded-xl"
            name="packages"
            id="packages"
          >
            <option value="package1">datos $10.000</option>
            <option value="package2">minutos $6.000</option>
          </select>
        </div>
        <input
          className="p-2 bg-indigo-900 hover:bg-indigo-700 text-white font-semibold rounded-xl"
          type="button"
          value="Comprar"
        />
      </div>
      <div className="flex flex-col pb-2 w-full">
        <h2 className="text-xl font-semibold text-red-800">Claro</h2>
        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="packages">Selecciona el paquete</label>
          <select
            className="p-2 border rounded-xl"
            name="packages"
            id="packages"
          >
            <option value="package1">datos $10.000</option>
            <option value="package2">minutos $6.000</option>
          </select>
        </div>
        <input
          className="p-2 bg-red-800 hover:bg-red-600 text-white font-semibold rounded-xl"
          type="button"
          value="Comprar"
        />
      </div>
    </div>
  );
}
