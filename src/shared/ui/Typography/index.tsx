type Props = {
  value: string;

  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
};

function Typography(props: Props) {
  return <p className={`typography text-${props.size}`}>{props.value}</p>;
}

export default Typography;
