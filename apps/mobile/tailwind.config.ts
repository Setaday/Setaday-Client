import { color, font } from "@setaday/design-token";
import { PluginAPI } from "tailwindcss/types/config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      fontSize: font,
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newFontUtilities = {
        ".font-head1_b_22": {
          fontSize: font.head1_b_22.fontSize,
          fontWeight: font.head1_b_22.fontWeight,
          fontFamily: font.head1_b_22.fontFamily,
          lineHeight: font.head1_b_22.lineHeight,
          letterSpacing: font.head1_b_22.letterSpacing,
        },
        ".font-body1_b_18": {
          fontSize: font.body1_b_18.fontSize,
          fontWeight: font.body1_b_18.fontWeight,
          fontFamily: font.body1_b_18.fontFamily,
          lineHeight: font.body1_b_18.lineHeight,
          letterSpacing: font.body1_b_18.letterSpacing,
        },
        ".font-body2_b_16": {
          fontSize: font.body2_b_16.fontSize,
          fontWeight: font.body2_b_16.fontWeight,
          fontFamily: font.body2_b_16.fontFamily,
          lineHeight: font.body2_b_16.lineHeight,
          letterSpacing: font.body2_b_16.letterSpacing,
        },
        ".font-body3_m_16": {
          fontSize: font.body3_m_16.fontSize,
          fontWeight: font.body3_m_16.fontWeight,
          fontFamily: font.body3_m_16.fontFamily,
          lineHeight: font.body3_m_16.lineHeight,
          letterSpacing: font.body3_m_16.letterSpacing,
        },
        ".font-body4_r_16": {
          fontSize: font.body4_r_16.fontSize,
          fontWeight: font.body4_r_16.fontWeight,
          fontFamily: font.body4_r_16.fontFamily,
          lineHeight: font.body4_r_16.lineHeight,
          letterSpacing: font.body4_r_16.letterSpacing,
        },
        ".font-body5_m_14": {
          fontSize: font.body5_m_14.fontSize,
          fontWeight: font.body5_m_14.fontWeight,
          fontFamily: font.body5_m_14.fontFamily,
          lineHeight: font.body5_m_14.lineHeight,
          letterSpacing: font.body5_m_14.letterSpacing,
        },
        ".font-body6_m_12": {
          fontSize: font.body6_m_12.fontSize,
          fontWeight: font.body6_m_12.fontWeight,
          fontFamily: font.body6_m_12.fontFamily,
          lineHeight: font.body6_m_12.lineHeight,
          letterSpacing: font.body6_m_12.letterSpacing,
        },
        ".font-button2_sb_20": {
          fontSize: font.button2_sb_20.fontSize,
          fontWeight: font.button2_sb_20.fontWeight,
          fontFamily: font.button2_sb_20.fontFamily,
          lineHeight: font.button2_sb_20.lineHeight,
          letterSpacing: font.button2_sb_20.letterSpacing,
        },
        ".font-head2_sb_18": {
          fontSize: font.head2_sb_18.fontSize,
          fontWeight: font.head2_sb_18.fontWeight,
          fontFamily: font.head2_sb_18.fontFamily,
          lineHeight: font.head2_sb_18.lineHeight,
          letterSpacing: font.head2_sb_18.letterSpacing,
        },
        ".font-button1_sb_18": {
          fontSize: font.button1_sb_18.fontSize,
          fontWeight: font.button1_sb_18.fontWeight,
          fontFamily: font.button1_sb_18.fontFamily,
          lineHeight: font.button1_sb_18.lineHeight,
          letterSpacing: font.button1_sb_18.letterSpacing,
        },
        ".font-title1_sb_16": {
          fontSize: font.title1_sb_16.fontSize,
          fontWeight: font.title1_sb_16.fontWeight,
          fontFamily: font.title1_sb_16.fontFamily,
          lineHeight: font.title1_sb_16.lineHeight,
          letterSpacing: font.title1_sb_16.letterSpacing,
        },
        ".font-body7_m_16": {
          fontSize: font.body7_m_16.fontSize,
          fontWeight: font.body7_m_16.fontWeight,
          fontFamily: font.body7_m_16.fontFamily,
          lineHeight: font.body7_m_16.lineHeight,
          letterSpacing: font.body7_m_16.letterSpacing,
        },
        ".font-caption1_m_12": {
          fontSize: font.caption1_m_12.fontSize,
          fontWeight: font.caption1_m_12.fontWeight,
          fontFamily: font.caption1_m_12.fontFamily,
          lineHeight: font.caption1_m_12.lineHeight,
          letterSpacing: font.caption1_m_12.letterSpacing,
        },
        ".font-body8_m_14": {
          fontSize: font.body8_m_14.fontSize,
          fontWeight: font.body8_m_14.fontWeight,
          fontFamily: font.body8_m_14.fontFamily,
          lineHeight: font.body8_m_14.lineHeight,
          letterSpacing: font.body8_m_14.letterSpacing,
        },
        ".font-body9_sb_14": {
          fontSize: font.body9_sb_14.fontSize,
          fontWeight: font.body9_sb_14.fontWeight,
          fontFamily: font.body9_sb_14.fontFamily,
          lineHeight: font.body9_sb_14.lineHeight,
          letterSpacing: font.body9_sb_14.letterSpacing,
        },
      };

      addUtilities(newFontUtilities);
    },
  ],
};
