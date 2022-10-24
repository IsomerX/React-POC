import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ShadowBox = (props: Props) => {
  return (
    <div className={`p-3 shadow-lg ${props.className}`}>{props.children}</div>
  );
};

export default ShadowBox;
