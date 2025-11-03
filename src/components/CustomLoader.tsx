
const CustomLoader = ({
  src,
  width,
  quality = 75,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return new URL(src)
};

export default CustomLoader;