export default function RingStar({
  size = 55,
}: {
  size?: number | string;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 55 55"
      fill="none"
    >
      <circle cx="27.5" cy="27.5" r="27.5" fill="#152B70" />
      <g filter="url(#filter0_d_232_647)">
        <path
          d="M27.5 12L30.98 22.7102H42.2414L33.1307 29.3295L36.6107 40.0398L27.5 33.4205L18.3893 40.0398L21.8693 29.3295L12.7586 22.7102H24.02L27.5 12Z"
          fill="#14E410"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_232_647"
          x="12.7587"
          y="12"
          width="29.4827"
          height="32.0396"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_232_647"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_232_647"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
