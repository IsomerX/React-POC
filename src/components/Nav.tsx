import React from "react";

type Props = {
  username: string;
};

const Nav = (props: Props) => {
  return (
    <div className="flex items-center justify-between bg-primary py-3">
      <div className="flex items-center gap-5">
        <div>ME</div>
        <div className="text-secondary">Home</div>
        <div className="rounded-md bg-gray p-3 text-white">Allocation</div>
        <input placeholder="Search.." />
        <div className="text-secondary">Search</div>
      </div>
      <div>Welcome: {props.username}</div>
    </div>
  );
};

export default Nav;
