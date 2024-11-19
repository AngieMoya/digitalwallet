import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center p-8 bg-teal-400 rounded-xl">
      <h2 className="font-bold text-xl text-indigo-900">Crea tu cuenta</h2>
      <form className="p-4 text-white text-sm">
        <div className="flex flex-col pb-2">
          <label htmlFor="name">Nombre Completo</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="text"
            name="name"
            placeholder="Nombre completo"
            id="name"
          ></input>
        </div>
        <div className="flex flex-col pb-6">
          <label htmlFor="cel">Número celular</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="text"
            name="cel"
            placeholder="Número celular"
            id="cel"
          ></input>
        </div>
        <input
          className="rounded-xl p-2 bg-indigo-900 w-full"
          type="submit"
          value="Crear cuenta"
        />
        <Link className="text-indigo-900 font-semibold" href={"/login"}>
          Ingresa a tu cuenta
        </Link>
      </form>
    </div>
  );
}
