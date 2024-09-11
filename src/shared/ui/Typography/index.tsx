type Props = {
  value: string;

  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
};

function Typography(props: Props) {
  const defaultSize = 'md';

  const defaultWeight = 'normal';

  const size = props.size ?? defaultSize;

  const weight = props.weight ?? defaultWeight;

  return <p className={`typography font-${weight} text-${size}`}>{props.value}</p>;
}

export default Typography;
