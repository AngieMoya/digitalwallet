import Cardmovement from '@/components/Cardmovement';
import { newMovements } from '@/actions';

export default async function Movements() {
  const res = await newMovements();
  console.log('res', res);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="p-4 text-2xl font-semibold text-indigo-900">Movimientos</h2>
      {Array.isArray(res) &&
        res.map((e, i) => (
          <Cardmovement
            key={i}
            date={e.date}
            typeTransaction={e.type}
            destiny={e.destination}
            origin={e.origin}
            amount={e.amount}
            description={e.description}
          />
        ))}
    </div>
  );
}
