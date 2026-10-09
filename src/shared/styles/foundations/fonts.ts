import localFont from "next/font/local";

export const DMSans = localFont({
  src: [
    {
      path: "../../../../public/fonts/DMSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/DMSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../../public/fonts/DMSans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../../../public/fonts/DMSans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../../public/fonts/DMSans-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../../../public/fonts/DMSans-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-dm-sans",
});

export const Manrope = localFont({
  src: [
    {
      path: "../../../../public/fonts/Manrope-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../../public/fonts/Manrope-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../../public/fonts/Manrope-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../../../public/fonts/Manrope-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../../public/fonts/Manrope-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-manrope",
});
