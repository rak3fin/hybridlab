export default function CustomHeader({
  whiteHeading = "",
  colourHeading = "",
}: {
  whiteHeading?: string;
  colourHeading?: string;
}) {
  return (
    <h1 className="font-bold text-2xl xlg:text-4xl text-center lg:text-left text-white tracking-[0.04em] font-pilat">
      <span className="inline">{whiteHeading}</span>&nbsp;
      <span className="text-site-main-color inline">{colourHeading}</span>
    </h1>
  );
}
