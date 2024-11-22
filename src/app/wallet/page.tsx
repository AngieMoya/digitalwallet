'use client';

import { getBalance } from '@/actions';
import Button from '@/components/Button';
import Nav from '@/components/Nav';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, startTransition } from 'react';

export default function WalletHome() {
  const router = useRouter();
  const [state, fetchBalance] = useActionState(getBalance, null);
  useEffect(() => {
    startTransition(() => {
      fetchBalance();
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h1 className="pb-8 text-3xl font-bold text-indigo-900">Mi Billetera</h1>
        <h2 className="text-2xl font-semibold text-indigo-900">Saldo</h2>
        <p className="text-xl font-semibold">${parseInt(state?.balance || 0, 10).toFixed(2) || '0.00'}</p>
        <div className="flex w-2/4 min-w-min justify-evenly p-8">
          <Button
            text={'Envía'}
            onClick={() => {
              router.push('/send');
            }}
          ></Button>
          <Button
            text={'Recarga'}
            onClick={() => {
              router.push('/reload');
            }}
          ></Button>
          <Button
            text={'Retira'}
            onClick={() => {
              router.push('/withdraws');
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}
