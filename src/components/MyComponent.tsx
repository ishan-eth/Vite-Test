type Props = {
  title: string;
  count: number;
};

const MyComponent = ({ title, count }: Props) => {
  return (
    <div>
      {title}
      {count}
    </div>
  );
};

export default MyComponent;
