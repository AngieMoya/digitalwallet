import Button from "./Button";
import Digit from "./Digit";

export default function Codewithdraw() {
  return (
    <div className="flex flex-col border rounded-xl p-4 items-center justify-center w-80">
      <h2 className="text-2xl font-semibold text-indigo-900 pb-4">
        Código de retiro
      </h2>
      <div className="flex w-full justify-evenly">
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
        <Digit></Digit>
      </div>
      <span className="pb-2 pt-2">Valido por 30 minutos</span>
      <Button text={"Cancelar"}></Button>
    </div>
  );
}
