export default function RightArrow({
  size = 29,
  color = "#02012D",
}: {
  size?: number | string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7071 14.7071C23.0976 14.3166 23.0976 13.6834 22.7071 13.2929L16.3431 6.92893C15.9526 6.53841 15.3195 6.53841 14.9289 6.92893C14.5384 7.31946 14.5384 7.95262 14.9289 8.34315L20.5858 14L14.9289 19.6569C14.5384 20.0474 14.5384 20.6805 14.9289 21.0711C15.3195 21.4616 15.9526 21.4616 16.3431 21.0711L22.7071 14.7071ZM8 15H22V13H8V15Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
}
