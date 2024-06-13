import { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  error?: string | false;
  width?: string;
  onChange: (e: string | ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  value: string;
  name?: string;
  type?: string;
};

export default function Input(props: InputProps) {
  const { label, error, width, value, onChange, onBlur, name, type } = props;
  return (
    <div className={`flex flex-col w-${width} rounded-sm`}>
      <span className="text-lg mb-1 font-extralight">{label && label}</span>
      <div className={`rounded w-full}`}>
        {type === "textArea" ? (
          <textarea
            rows={4}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`outline-0 border-4 border-${
              error ? `error` : `cheese`
            } pl-[6px] w-full rounded text-textDark focus:border-elecBlue`}
          />
        ) : (
          <input
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={`outline-0 border-4 border-${
              error ? `error` : `cheese`
            } pl-[6px] w-full rounded text-textDark focus:border-elecBlue`}
          />
        )}
      </div>
      <span className={`h-3.5 text-sm text-error`}>{error ? error : ""}</span>
    </div>
  );
}
