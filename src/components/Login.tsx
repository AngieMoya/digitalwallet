import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center p-8 bg-teal-400 rounded-xl">
      <h2 className="font-bold text-xl text-indigo-900">Digital Wallet</h2>
      <form className="p-4 text-white text-sm">
        <div className="flex flex-col pb-2">
          <label htmlFor="cel">Número celular</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="text"
            name="cel"
            placeholder="Número Celular"
            id="cel"
          ></input>
        </div>
        <div className="flex flex-col pb-6">
          <label htmlFor="password">Clave</label>
          <input
            className="rounded-xl p-2 text-indigo-900"
            type="password"
            name="password"
            placeholder="Clave"
            id="password"
          ></input>
        </div>
        <input
          className="rounded-xl p-2 bg-indigo-900 w-full"
          type="submit"
          value="Entrar"
        />
        <Link className="text-indigo-900 font-semibold" href={"/sign-up"}>
          No tienes cuenta?
        </Link>
      </form>
    </div>
  );
}
