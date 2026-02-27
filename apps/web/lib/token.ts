/**
 * Englexa Tutoring — Design Token Class Names
 *
 * Step 1 — Import CSS once in app/layout.tsx:
 *   import "@/lib/token.css"
 *
 * Step 2 — Import tokens wherever needed:
 *   import { textStyles, colorStyles, spacingStyles, radiusStyles, shadowStyles } from "@/lib/token"
 *
 * Step 3 — Use as className strings:
 *   <h1 className={textStyles.heading1}>Title</h1>
 *   <p  className={`${textStyles.body} ${colorStyles.text.dark}`}>Body</p>
 *   <div className={`${spacingStyles.p.lg} ${radiusStyles.card} ${shadowStyles.md}`}>Card</div>
 */

export * from "./text_style";
export * from "./color_style";
export * from "./spacing_style";
export * from "./layout_style";