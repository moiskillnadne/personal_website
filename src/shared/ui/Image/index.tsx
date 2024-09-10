type Props = {
  src: string;

  width?: string;
  height?: string;

  borderRadius?: string;

  alt?: string;
};

function Image(props: Props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      style={{ borderRadius: props.borderRadius }}
    />
  );
}

export default Image;
