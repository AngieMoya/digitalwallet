export default function Services() {
  return (
    <div className="flex w-full flex-col items-center justify-center p-8">
      <h2 className="p-4 text-2xl font-semibold text-indigo-900">Servicios</h2>
      <div className="flex w-full items-center justify-evenly pb-16">
        <label className="font-semibold" htmlFor="typeservice">
          Que servicio desea usar?
        </label>
        <select className="rounded-xl border p-2 font-semibold text-gray-500" name="typeservice" id="typeservice">
          <option value="paquetes">Compra de paquetes moviles</option>
          <option value="servicios">Pago de servicios públicos</option>
        </select>
      </div>
    </div>
  );
}
