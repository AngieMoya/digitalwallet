export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8">
      <h2 className="text-2xl font-semibold text-indigo-900 p-4">Servicios</h2>
      <div className="flex justify-evenly items-center w-full pb-16">
        <label className="font-semibold" htmlFor="typeservice">
          Que servicio desea usar?
        </label>
        <select
          className="p-2 border rounded-xl text-gray-500 font-semibold"
          name="typeservice"
          id="typeservice"
        >
          <option value="paquetes">Compra de paquetes moviles</option>
          <option value="servicios">Pago de servicios públicos</option>
        </select>
      </div>
    </div>
  );
}
