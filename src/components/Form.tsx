type FormProps = {
  title: string;
  input1: string;
  input2: string;
  buttontext: string;
};

export default function Form(props: FormProps) {
  const { title, input1, input2, buttontext } = props;
  return (
    <div className="flex flex-col h-screen items-center justify-center w-full">
      <form className="font-semibold p-8 text-sm border rounded-xl min-w-80">
        <h2 className="text-2xl font-semibold text-indigo-900 pb-4">{title}</h2>
        <div className="flex flex-col pb-2">
          <label htmlFor="cel">{input1}</label>
          <input className="border rounded-xl p-2" type="tel" />
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="cel">{input2}</label>
          <input className="border rounded-xl p-2" type="number" />
        </div>
        <input
          className="rounded-xl p-2 bg-indigo-900 w-full text-white hover:bg-indigo-600"
          type="submit"
          value={buttontext}
        />
      </form>
    </div>
  );
}
