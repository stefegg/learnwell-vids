"use client";

type ButtonProps = {
  buttonText: string;
  size?: "xs" | "sm" | "med" | "lg" | "xl";
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button(props: ButtonProps) {
  const { buttonText, size, onClick, type } = props;
  const getSize = () => {
    switch (size) {
      case "xs":
        return `w-24 h-6 text-base text-xs`;
      case "sm":
        return `w-32 h-8 text-base text-sm`;
      case "med":
        return `w-48 h-12 text-xs xl:text-base lg:text-sm`;
      case "lg":
        return `w-80 h-16 text-sm lg:text-xl md:text-lg sm:text-base`;
      case "xl":
        return `w-full h-16 text-xl`;
      default:
        `w-48 h-12 text-base`;
    }
  };
  return (
    <button
      onClick={onClick}
      className={`${getSize()} rounded-lg border-2 border-cheese bg-greenDark text-white hover:bg-elecBlue hover:border-tangerine`}
      type={type ? type : "button"}
    >
      {buttonText}
    </button>
  );
}
