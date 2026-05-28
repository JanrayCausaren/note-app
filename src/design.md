---
name: Zenith Productivity
colors:
  surface: "#f8f9ff"
  surface-dim: "#cbdbf5"
  surface-bright: "#f8f9ff"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#eff4ff"
  surface-container: "#e5eeff"
  surface-container-high: "#dce9ff"
  surface-container-highest: "#d3e4fe"
  on-surface: "#0b1c30"
  on-surface-variant: "#464554"
  inverse-surface: "#213145"
  inverse-on-surface: "#eaf1ff"
  outline: "#777586"
  outline-variant: "#c7c4d7"
  surface-tint: "#5148d7"
  primary: "#2a14b4"
  on-primary: "#ffffff"
  primary-container: "#4338ca"
  on-primary-container: "#c1beff"
  inverse-primary: "#c3c0ff"
  secondary: "#006a61"
  on-secondary: "#ffffff"
  secondary-container: "#86f2e4"
  on-secondary-container: "#006f66"
  tertiary: "#692400"
  on-tertiary: "#ffffff"
  tertiary-container: "#8f3400"
  on-tertiary-container: "#ffb393"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#e3dfff"
  primary-fixed-dim: "#c3c0ff"
  on-primary-fixed: "#100069"
  on-primary-fixed-variant: "#372abf"
  secondary-fixed: "#89f5e7"
  secondary-fixed-dim: "#6bd8cb"
  on-secondary-fixed: "#00201d"
  on-secondary-fixed-variant: "#005049"
  tertiary-fixed: "#ffdbcd"
  tertiary-fixed-dim: "#ffb597"
  on-tertiary-fixed: "#360f00"
  on-tertiary-fixed-variant: "#7d2d00"
  background: "#f8f9ff"
  on-background: "#0b1c30"
  surface-variant: "#d3e4fe"
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: "600"
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: "600"
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: "400"
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "500"
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: "600"
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is centered on the concept of "Calm Productivity." It aims to reduce cognitive load for users by employing a high-end minimalist aesthetic. By prioritizing whitespace and a restrained color palette, the UI creates a digital sanctuary for thought and organization.

The style is **Corporate Modern with a Minimalist edge**, leaning heavily on structural clarity and purposeful movement. It avoids unnecessary decoration, ensuring that the user's content remains the primary focus. The emotional response should be one of order, reliability, and mental clarity.

## Colors

The palette is anchored by a deep **Indigo** primary, chosen for its associations with focus and professional stability. A vibrant **Teal** serves as a secondary accent for success states or specific action highlights, providing a refreshing contrast without feeling frantic.

Neutrals are derived from a "Slate" palette, using cool grays to maintain a crisp, modern feel. The background is a very soft off-white to reduce eye strain during long writing sessions. Color is used sparingly—only to indicate interactivity, status, or hierarchy.

## Typography

The typographic scale uses **Manrope** for headlines to provide a refined, modern character that feels approachable yet professional. **Inter** is used for all body text and UI labels due to its exceptional legibility and systematic, utilitarian nature.

To ensure a sense of calm, line heights are generous (1.5x for body text). High-level headlines use a slight negative letter-spacing to appear more cohesive at larger scales, while small labels use increased letter-spacing and a heavier weight for immediate scanning.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop, transitioning to a 4-column layout for mobile. A strict 8px spacing rhythm ensures vertical consistency across all components.

The layout philosophy emphasizes **generous margins** to create a "breathing room" effect around the content. Note-taking views should employ a centered fixed-width container (max 800px) to optimize line length for readability, while dashboard views utilize the full 1280px container.

## Elevation & Depth

Hierarchy is established through **tonal layers** and **ambient shadows**. The design avoids heavy dropshadows in favor of subtle, diffused blurs that suggest a light source from directly above.

- **Level 0 (Base):** The main background surface.
- **Level 1 (Cards):** Low-contrast outlines (1px solid #E2E8F0) with no shadow, used for secondary information.
- **Level 2 (Active Elements):** A very soft shadow (0px 4px 6px -1px rgba(0, 0, 0, 0.05)) to lift primary cards or active note states.
- **Level 3 (Overlays):** Used for modals and dropdowns, featuring a more pronounced but still diffused shadow (0px 10px 15px -3px rgba(0, 0, 0, 0.1)).

Glassmorphism is used exclusively for sidebars or navigation blurs to maintain context of the underlying content without causing visual clutter.

## Shapes

The shape language is **Rounded (Level 2)**. This provides a 0.5rem (8px) base radius for standard components like buttons and input fields, which balances professional precision with a modern, friendly touch.

Larger containers like cards or note previews should utilize `rounded-lg` (16px) to emphasize the "contained" feel of individual thoughts. Selection indicators or "pills" may use a fully circular radius to distinguish them from structural elements.

## Components

### Buttons

Primary buttons use the Deep Indigo background with white text. Hover states should slightly darken the indigo. Secondary buttons use a ghost style (transparent background with a subtle border) to keep the UI lightweight.

### Input Fields

Inputs should be clean with a 1px border. When focused, the border transitions to the primary Indigo with a soft 2px outer glow (ring). Placeholder text is kept in a light gray to remain unobtrusive.

### Cards (Notes)

Note cards are the core component. They feature a white background, Level 2 roundedness, and a very subtle Level 1 shadow. On hover, the shadow should deepen slightly to provide tactile feedback.

### Chips & Tags

Tags for categorizing notes should use low-saturation background tints of the primary or secondary colors (e.g., a very pale indigo background with deep indigo text) to remain legible but secondary in the visual hierarchy.

### Checkboxes & Radio Buttons

These should use the primary Indigo color for the "checked" state. Use a simple, thin checkmark icon to maintain the minimalist aesthetic.

### Additional Components: Empty States

Given the focus on "Zen," empty states should be evocative rather than just functional. Use thin-line iconography and centered typography with ample whitespace to keep the user feeling calm even when their "desk" is clear.
