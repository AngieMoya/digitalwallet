import { formatDateWithIntl } from '@/utils';

type CardMovementProps = {
  date: Date;
  typeTransaction: string;
  destiny: string;
  origin: string;
  amount: number;
  description: string;
};

export default function CardMovement(props: CardMovementProps) {
  const { date, typeTransaction, destiny, origin, amount, description } = props;

  return (
    <div className="flex w-96 flex-col items-center rounded-xl bg-teal-100 p-4 text-sm text-gray-600">
      <ul className="text-xl">
        <li>
          <p>Fecha:{formatDateWithIntl(date)}</p>
        </li>
        <li>
          <p>Tipo de transacción:{typeTransaction}</p>
        </li>
        <li>
          <p>Destino:{destiny}</p>
        </li>
        <li>
          <p>Origen:{origin}</p>
        </li>
        <li>
          <p>Valor:{amount}</p>
        </li>
        <li>
          <p>Descripción:{description}</p>
        </li>
      </ul>
    </div>
  );
}
