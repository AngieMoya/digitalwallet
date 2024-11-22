import Cardmovement from '@/components/Cardmovement';

export default function Movements() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="p-4 text-2xl font-semibold text-indigo-900">Movimientos</h2>
      <Cardmovement></Cardmovement>
    </div>
  );
}
