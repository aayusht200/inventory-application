import { useState } from "react";
interface ResetButtonProps {
  resetFuncion: () => void;
}
const ResetButton = ({ resetFuncion }: ResetButtonProps) => {
  const [isSpinng, setSpin] = useState(false);

  return (
    <button
      type="reset"
      onClick={() => {
        setSpin(true);
        resetFuncion();
      }}
      onAnimationEnd={() => setSpin(false)}
      className={`reset-button text-button-text hover:text-button-hover absolute right-0.5 inline-block cursor-pointer text-4xl hover:scale-105 ${isSpinng ? "animate-spin-once" : ""}`}
    >
      ⥁
    </button>
  );
};

export { ResetButton };
