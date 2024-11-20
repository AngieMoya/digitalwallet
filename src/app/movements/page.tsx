import Cardmovement from "@/components/Cardmovement";

export default function Movements() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold text-indigo-900 p-4">
        Movimientos
      </h2>
      <Cardmovement></Cardmovement>
    </div>
  );
}
