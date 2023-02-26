import PrimaryButton from "./PrimaryButton";

export default function BottomToolbar() {
  return (
    <div className="fixed bottom-0 w-screen z-0 bg-white dark:bg-black">
      <div className="flex flex-row my-2">
        <PrimaryButton buttonText="👍" />
        <PrimaryButton buttonText="👎" />
      </div>
    </div>
  );
}
