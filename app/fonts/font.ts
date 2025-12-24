import localFont from "next/font/local";

export const morpich = localFont({
  src: [
    {
      path: "./AnalogMorpich-6Rn16.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--morpich",
});

export const archivo = localFont({
  src: [
    {
      path: "./Archivo_Condensed-Black.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--archivo",
});
