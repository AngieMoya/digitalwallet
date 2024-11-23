'use client';
import { newTransfer } from '@/actions';
import { useActionState } from 'react';

type FormProps = {
  title: string;
  input1: string;
  input2: string;
  buttontext: string;
};

export default function Form(props: FormProps) {
  const { title, input1, input2, buttontext } = props;
  const [state, formAction] = useActionState(newTransfer, null);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form className="min-w-80 rounded-xl border p-8 text-sm font-semibold" action={formAction}>
        <h2 className="pb-4 text-2xl font-semibold text-indigo-900">{title}</h2>
        <div className="flex flex-col pb-2">
          <label htmlFor="cel">{input1}</label>
          <input
            className="rounded-xl border p-2"
            type="tel"
            inputMode="numeric"
            pattern="\d{10}"
            maxLength={10}
            id="cel"
            required
          />
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="value">{input2}</label>
          <input className="rounded-xl border p-2" type="number" id="value" required />
        </div>
        <input
          className="w-full rounded-xl bg-indigo-900 p-2 text-white hover:bg-indigo-600"
          type="submit"
          value={buttontext}
        />
        {state?.error && (
          <p className="mt-2 font-semibold text-red-700" role="alert">
            {state.error}
          </p>
        )}
      </form>
    </div>
  );
}
