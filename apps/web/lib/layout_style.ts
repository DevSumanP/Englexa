/**
 * Englexa Tutoring — Border Radius & Shadow Class Names
 *
 * Radius: <div className={radiusStyles.card}>…</div>
 * Shadow: <div className={shadowStyles.md}>…</div>
 *
 * Requires: import "@/lib/tokens.css" in app/layout.tsx
 */

export const radiusStyles = {
    /** 12px — cards, images */
    card: "radius-card",
    /** 24px — containers, tags, links */
    pill: "radius-pill",
    /** 100px — nav pills, buttons, avatars */
    full: "radius-full",
} as const;

export const shadowStyles = {
    /** Subtle lift — small cards */
    sm: "shadow-sm",
    /** Elevated — dropdowns, modals */
    md: "shadow-md",
} as const;

export type RadiusKey = keyof typeof radiusStyles;
export type ShadowKey = keyof typeof shadowStyles;