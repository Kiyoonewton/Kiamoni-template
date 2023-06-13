export function backgroundImage(secondary: string, primary: string) {
  const svgString = `<svg width="1920" height="1074" viewBox="0 0 1920 1074" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1920 0H0V982H780.051C841.753 1039.1 924.301 1074 1015 1074C1105.7 1074 1188.25 1039.1 1249.95 982H1920V0Z" fill="url(#paint0_linear_834_24426)"/>
    <defs>
    <linearGradient id="paint0_linear_834_24426" x1="9.49098" y1="0.0149268" x2="1981" y2="1129" gradientUnits="userSpaceOnUse">
    <stop offset="0.197917" stop-color="${secondary}"/>
    <stop offset="1" stop-color="${primary}"/>
    </linearGradient>
    </defs>
    </svg>
  `;

  const svgData = `data:image/svg+xml;base64,${btoa(svgString)}`;
  const backgroundImage = `url(${svgData})`;
  return backgroundImage;
}