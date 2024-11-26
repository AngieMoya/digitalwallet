'use client';
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function Nav() {
  return (
    <nav className="flex w-full justify-between p-8">
      <Link className="font-semibold text-fuchsia-600 hover:text-indigo-900" href={'/wallet'}>
        Inicio
      </Link>
      <Link className="font-semibold text-fuchsia-600 hover:text-indigo-900" href={'/movements'}>
        Movimientos
      </Link>
      <Link className="font-semibold text-fuchsia-600 hover:text-indigo-900" href={'myservices'}>
        Servicios
      </Link>
      <Link
        className="font-semibold text-fuchsia-600 hover:text-indigo-900"
        onClick={() => {
          Cookies.remove('userId', { path: '/' });
          Cookies.remove('cellular', { path: '/' });
        }}
        href="/"
      >
        Cerrar sesión
      </Link>
    </nav>
  );
}
