export default function PublicService() {
  return (
    <div className="p-4 flex flex-col border rounded-xl w-96">
      <form className="flex flex-col items-center">
        <div className="flex flex-col pb-2 w-full">
          <label htmlFor="services">Selecciona el servicio</label>
          <select
            className="p-2 border rounded-xl"
            name="services"
            id="services"
          >
            <option value="water">TripeA</option>
            <option value="energy">Air-e</option>
            <option value="gas">Gases del caribe</option>
          </select>
        </div>
        <div className="flex flex-col pb-2 w-full">
          <label htmlFor="reference">Número de referencia</label>
          <input className="p-2 border rounded-xl" type="text" />
        </div>
        <div className="flex flex-col pb-4 w-full">
          <label htmlFor="value">Valor a cancelar</label>
          <input className="p-2 border rounded-xl" type="number" />
        </div>
        <input
          className="p-2 bg-indigo-900 hover:bg-indigo-700 text-white font-semibold rounded-xl w-full"
          type="button"
          value="Pagar"
        />
      </form>
    </div>
  );
}
