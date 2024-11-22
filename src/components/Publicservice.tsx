export default function PublicService() {
  return (
    <div className="flex w-96 flex-col rounded-xl border p-4">
      <form className="flex flex-col items-center">
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
          <input className="rounded-xl border p-2" type="text" />
        </div>
        <div className="flex w-full flex-col pb-4">
          <label htmlFor="value">Valor a cancelar</label>
          <input className="rounded-xl border p-2" type="number" />
        </div>
        <input
          className="w-full rounded-xl bg-indigo-900 p-2 font-semibold text-white hover:bg-indigo-700"
          type="button"
          value="Pagar"
        />
      </form>
    </div>
  );
}
