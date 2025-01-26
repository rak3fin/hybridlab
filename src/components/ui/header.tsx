export default function CustomHeader({
  whiteHeading = "",
  colourHeading = "",
}: {
  whiteHeading?: string;
  colourHeading?: string;
}) {
  return (
    <h1 className="font-bold text-2xl lg:text-4xl text-center lg:text-left text-white tracking-[0.04em] font-pilat">
      <span>{whiteHeading}</span>&nbsp;
      <span className="text-site-main-color">{colourHeading}</span>
    </h1>
  );
}
