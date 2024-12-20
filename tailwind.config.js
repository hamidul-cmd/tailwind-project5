/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
      },
      fontFamily: {
        Lexend:"Lexend",
      },
      colors: {
        green_60: "#CAFF33",
        green_65: "#D1FF4C",
        green_70: "#D8FF66",
        green_80: "#E5FF99",
        green_90: "#F2FFCC",
        green_95: "#F8FFE5",
        green_97: "#FBFFF0",
        green_99: "#FEFFFA",

        white_90: "#E4E4E7",
        white_95: "#F1F1F3",
        white_97: "#F7F7F8",
        white_99: "#FCFCFD",


        gray_10: "#191919",
        gray_11: "#1C1C1C",
        gray_15: "#262626",
        gray_20: "#333333",
        gray_30: "#4C4C4D",
        gray_35: "#59595A",
        gray_40: "#656567",
        gray_60: "#98989A",
        gray_70: "#B3B3B3",
        gray_75: "#BFBFBF",
      },
      fontSize: {
        fs_12_18: "clamp(0.75rem, 0.6544117647058824rem + 0.39215686274509803vw, 1.125rem);",
        fs_14_18: "clamp(0.875rem, 0.125rem + 0.8333333333333334vw, 1.125rem);",
        fs_14_20: "clamp(0.875rem, 0.7794117647058824rem + 0.39215686274509803vw, 1.25rem);",
        fs_10_17: "clamp(0.625rem, 0.5134803921568628rem + 0.457516339869281vw, 1.0625rem);",
        fs_9_15: "clamp(0.5625rem, 0.46691176470588236rem + 0.39215686274509803vw, 0.9375rem);",
        fs_8_13: "clamp(0.5rem, 0.42034313725490197rem + 0.326797385620915vw, 0.8125rem);",
        fs_20_24: "clamp(1.25rem, 0.5rem + 0.8333333333333334vw, 1.5rem);",
        fs_18_22: "clamp(1.125rem, 0.375rem + 0.8333333333333334vw, 1.375rem);",
        fs_18_20: "clamp(1.125rem, 0.75rem + 0.4166666666666667vw, 1.25rem);",
        fs_24_40: "clamp(1.5rem, 1.2450980392156863rem + 1.045751633986928vw, 2.5rem);",
        fs_32: "var(--fs_32)",
        fs_40: "var(--fs_40)",
        fs_46: "var(--fs_46)",
        fs_28_48: "clamp(1.75rem, 1.4313725490196079rem + 1.30718954248366vw, 3rem);",
        fs_40_58: "clamp(2.5rem, -0.875rem + 3.75vw, 3.625rem);",
      },
      maxWidth: ({ theme, breakpoints }) => ({
        ...theme('spacing'),
        wrapper: '1920px',

      }),
      backgroundImage: {
        borderbg__1: "linear-gradient(to bottom left ,#CAFF33 92%,#CAFF33 100%)",
      },
    },
  },
  plugins: [],
}

