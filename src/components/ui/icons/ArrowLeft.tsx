import type { SvgIconTypes } from "../../../types/icon";

export default function ArrowLeft({
  width = "30",
  height = "30",
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "2",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: SvgIconTypes) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      stroke-width={strokeWidth}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
      // className="lucide lucide-arrow-left-icon lucide-arrow-left"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
