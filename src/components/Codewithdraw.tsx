import Button from './Button';
import Digit from './Digit';

export default function Codewithdraw() {
  return (
    <div className="flex w-80 flex-col items-center justify-center rounded-xl border p-4">
      <h2 className="pb-4 text-2xl font-semibold text-indigo-900">Código de retiro</h2>
      <div className="flex w-full justify-evenly">
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
      </div>
      <span className="pb-2 pt-2">Valido por 30 minutos</span>
      <Button text={'Cancelar'}></Button>
    </div>
  );
}
