/**
 * Englexa Tutoring — Spacing Class Names
 *
 * Padding:    <div className={spacingStyles.p.lg}>…</div>
 * Padding X:  <div className={spacingStyles.px.md}>…</div>
 * Padding Y:  <div className={spacingStyles.py.xl}>…</div>
 * Margin top: <div className={spacingStyles.mt.sm}>…</div>
 * Margin bot: <div className={spacingStyles.mb.xl}>…</div>
 * Gap:        <div className={`flex ${spacingStyles.gap.lg}`}>…</div>
 *
 * Requires: import "@/lib/tokens.css" in app/layout.tsx
 */

export const spacingStyles = {
    p: {
        hairline: "p-hairline",  /* 2px  */
        micro: "p-micro",     /* 6px  */
        xs: "p-xs",        /* 8px  */
        sm: "p-sm",        /* 12px */
        md: "p-md",        /* 16px */
        lg: "p-lg",        /* 24px */
        xl: "p-xl",        /* 32px */
        "2xl": "p-2xl",       /* 40px */
        "3xl": "p-3xl",       /* 48px */
        section: "p-section",   /* 120px */
    },
    px: {
        hairline: "px-hairline",
        micro: "px-micro",
        xs: "px-xs",
        sm: "px-sm",
        md: "px-md",
        lg: "px-lg",
        xl: "px-xl",
        "2xl": "px-2xl",
        "3xl": "px-3xl",
        section: "px-section",
    },
    py: {
        hairline: "py-hairline",
        micro: "py-micro",
        xs: "py-xs",
        sm: "py-sm",
        md: "py-md",
        lg: "py-lg",
        xl: "py-xl",
        "2xl": "py-2xl",
        "3xl": "py-3xl",
        section: "py-section",
    },
    mt: {
        xs: "mt-xs",
        sm: "mt-sm",
        md: "mt-md",
        lg: "mt-lg",
        xl: "mt-xl",
        "2xl": "mt-2xl",
        "3xl": "mt-3xl",
        section: "mt-section",
    },
    mb: {
        xs: "mb-xs",
        sm: "mb-sm",
        md: "mb-md",
        lg: "mb-lg",
        xl: "mb-xl",
        "2xl": "mb-2xl",
        "3xl": "mb-3xl",
        section: "mb-section",
    },
    gap: {
        xs: "gap-xs",
        sm: "gap-sm",
        md: "gap-md",
        lg: "gap-lg",
        xl: "gap-xl",
        "2xl": "gap-2xl",
        "3xl": "gap-3xl",
    },
} as const;

export type SpacingGroupKey = keyof typeof spacingStyles;