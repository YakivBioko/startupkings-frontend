export default function Hamburger({
  size = 28,
  color = "#fff",
}: {
  size?: number | string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 18"
      fill="none"
    >
      <path
        d="M1 0C0.723858 0 0.5 0.223858 0.5 0.5C0.5 0.776142 0.723858 1 1 1V0ZM1 1H28V0H1V1Z"
        fill="white"
      />
      <path
        d="M1 8C0.723858 8 0.5 8.22386 0.5 8.5C0.5 8.77614 0.723858 9 1 9V8ZM1 9H28V8H1V9Z"
        fill="white"
      />
      <path
        d="M1 17C0.723858 17 0.5 17.2239 0.5 17.5C0.5 17.7761 0.723858 18 1 18V17ZM1 18H28V17H1V18Z"
        fill="white"
      />
    </svg>
  );
}
