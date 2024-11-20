import Link from "next/link";

export default function Nav() {
  return (
    <nav className="p-8 w-full flex justify-between">
      <Link
        className="font-semibold text-fuchsia-600 hover:text-indigo-900"
        href={"/wallet"}
      >
        Inicio
      </Link>
      <Link
        className="font-semibold text-fuchsia-600 hover:text-indigo-900"
        href={"/movements"}
      >
        Movimientos
      </Link>
      <Link
        className="font-semibold text-fuchsia-600 hover:text-indigo-900"
        href={"myservices"}
      >
        Servicios
      </Link>
      <Link
        className="font-semibold text-fuchsia-600 hover:text-indigo-900"
        href={"/"}
      >
        Cerrar sesión
      </Link>
    </nav>
  );
}
