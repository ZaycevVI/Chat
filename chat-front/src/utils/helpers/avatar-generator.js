import tinycolor from "tinycolor2";

function toCharCode(char) {
  const charCode = char.charCodeAt(0);

  if (charCode > 255) {
    return 255;
  } else if (charCode < 0) {
    return 0;
  }

  return charCode || 255;
}

export default id => {
  const [r, g, b] = id.split("").map(toCharCode);

  const color = tinycolor({ r, g, b }).toHexString();
  const colorLight = tinycolor({ r, g, b }).lighten().toHexString();

  return [
    color,
    colorLight
  ];
};
