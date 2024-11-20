export default function Card() {
  return (
    <div className="flex flex-col items-center p-4 bg-teal-100 text-sm w-96 rounded-xl text-gray-600">
      <ul className="text-xl">
        <li>
          <p>Fecha: 20/11/2024</p>
        </li>
        <li>
          <p>Valor: $ 100.000</p>
        </li>
        <li>
          <p>Tipo de transacción: Tranferencía</p>
        </li>
        <li>
          <p>Destino: Nombre completo</p>
        </li>
        <li>
          <p>Descripción: Breve descripción</p>
        </li>
      </ul>
    </div>
  );
}
