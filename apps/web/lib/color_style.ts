/**
 * Englexa Tutoring — Color Class Names
 * Source: Framer project export (2026-02-26)
 *
 * Text:       <p  className={colorStyles.text.orangeAccent}>…</p>
 * Background: <div className={colorStyles.bg.deepDark}>…</div>
 * Border:     <div className={colorStyles.border.forBorder}>…</div>
 *
 * Requires: import "@/lib/tokens.css" in app/layout.tsx
 */

export const colorStyles = {
    text: {
        /** rgb(238, 99, 78) — primary CTA / accent */
        orangeAccent: "color-orange-accent",
        /** rgb(240, 120, 101) — hover state of orange accent */
        orangeHover: "color-orange-hover",
        /** rgb(40, 41, 62) — deepest background tone */
        deepDark: "color-deep-dark",
        /** rgb(51, 54, 81) — default dark / nav background */
        dark: "color-dark",
        /** rgb(69, 73, 110) — border elements */
        forBorder: "color-for-border",
        /** rgb(255, 255, 255) — headings & UI text */
        white: "color-white",
        /** rgb(230, 230, 230) — body copy */
        lightGrey: "color-light-grey",
    },
    bg: {
        orangeAccent: "bg-orange-accent",
        orangeHover: "bg-orange-hover",
        deepDark: "bg-deep-dark",
        dark: "bg-dark",
        forBorder: "bg-for-border",
        white: "bg-white",
        lightGrey: "bg-light-grey",
    },
    border: {
        orangeAccent: "border-orange-accent",
        dark: "border-dark",
        forBorder: "border-for-border",
        white: "border-white",
    },
} as const;

export type ColorTextKey = keyof typeof colorStyles.text;
export type ColorBgKey = keyof typeof colorStyles.bg;
export type ColorBorderKey = keyof typeof colorStyles.border;