type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return (
    <button
      className="p-2 bg-indigo-900 rounded-xl w-28 text-white font-semibold hover:bg-indigo-600"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
