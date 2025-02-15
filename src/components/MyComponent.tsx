import React from "react";

type Props = {
  title: string;
  count: number;
};

const MyComponent = ({ title, count }: Props) => {
  return <div>{title}</div>;
};

export default MyComponent;
