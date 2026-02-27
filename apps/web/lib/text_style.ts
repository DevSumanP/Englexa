/**
 * Englexa Tutoring — Text Style Class Names
 * Source: Framer project export (2026-02-26)
 *
 * Usage: <h1 className={textStyles.heading1}>Hello</h1>
 * Requires: import "@/lib/tokens.css" in app/layout.tsx
 */

export const textStyles = {
    /** Plus Jakarta Sans 600 — 4rem / 3.5rem (lg) / 2.25rem (md) */
    heading1: "text-heading1",
    /** Plus Jakarta Sans 600 — 3rem / 2.5rem (lg) / 2rem (md) */
    heading2: "text-heading2",
    /** Plus Jakarta Sans 600 — 2.5rem / 2.5rem (lg) / 1.75rem (md) — blog variant */
    heading2Blog: "text-heading2Blog",
    /** Plus Jakarta Sans 600 — 1.75rem / 1.5rem (lg) / 1.375rem (md) */
    heading3: "text-heading3",
    /** Plus Jakarta Sans 600 — 1.375rem — no breakpoints */
    heading3Extra: "text-heading3Extra",
    /** Plus Jakarta Sans 600 — 1.125rem */
    heading4: "text-heading4",
    /** Plus Jakarta Sans 600 — 1rem */
    heading5: "text-heading5",
    /** Inter 400 — 1.125rem / 1rem (md) — Light Grey */
    bodyLarge: "text-bodyLarge",
    /** Inter 400 — 1rem — Light Grey */
    bodyMedium: "text-bodyMedium",
    /** Inter 400 — 0.875rem — Light Grey */
    bodySmall: "text-bodySmall",
    /** Inter 400 — 0.75rem — Light Grey */
    bodyXSmall: "text-bodyXSmall",
    /** Inter 500 — 0.875rem / 0.75rem (md) — White */
    label: "text-label",
    /** Inter 600 — 1rem — White */
    button: "text-button",
} as const;

export type TextStyleKey = keyof typeof textStyles;