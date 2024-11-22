type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return (
    <button
      className="w-28 rounded-xl bg-indigo-900 p-2 font-semibold text-white hover:bg-indigo-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
