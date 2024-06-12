import { Open_Sans } from "next/font/google";
import { Black_Han_Sans } from "next/font/google";

export const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  display: "swap",
});

export const blackHan = Black_Han_Sans({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
