interface Props {
  buttonText: string;
}

export default function PrimaryButton({ buttonText }: Props) {
  return (
    <button className="bg-fuchsia-600 rounded mx-2 p-4 grow">
      {buttonText}
    </button>
  );
}
