import { InputHTMLAttributes } from "react";

interface OptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

export function Option({ type = "radio", id, name, value, title }: OptionsProps) {
  return (
    <div>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} name={name} value={value} />
    </div>
  );
}
