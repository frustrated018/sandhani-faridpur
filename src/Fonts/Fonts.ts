import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    { path: "./Satoshi/Satoshi-Variable.ttf", style: "normal" },
    { path: "./Satoshi/Satoshi-VariableItalic.ttf", style: "italic" },
  ],
  variable: "--font-satoshi",
});

export const cabinateGrotesk = localFont({
  src: [{ path: "./Cabinate-Grotesk/CabinetGrotesk-Variable.ttf" }],
  variable: "--font-cabinate-grotesk",
});
