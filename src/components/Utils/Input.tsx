import React from "react";

type Props = {
  placeholder?: string;
  type: string;
  label?: string;
};

const Input = (props: Props) => {
  return (
    <label className="flex h-full flex-col">
      {props.label}
      <input
        type={props.type}
        placeholder={props.placeholder}
        className=" bg-[#e9ecef] p-2"
      />
    </label>
  );
};

export default Input;
