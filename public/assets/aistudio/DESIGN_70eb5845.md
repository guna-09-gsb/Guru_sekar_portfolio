---
name: Luminescent Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#4fdbc8'
  on-secondary: '#003731'
  secondary-container: '#04b4a2'
  on-secondary-container: '#003f38'
  tertiary: '#2fd9f4'
  on-tertiary: '#00363e'
  tertiary-container: '#00b7cf'
  on-tertiary-container: '#00434d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#a2eeff'
  tertiary-fixed-dim: '#2fd9f4'
  on-tertiary-fixed: '#001f25'
  on-tertiary-fixed-variant: '#004e5a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.75rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.005em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system targets high-growth tech founders, engineering leadership, and design-forward product teams seeking an elite Senior Full-Stack Engineer and Creative Technologist. The interface establishes credibility through architectural precision, surgical typographic rhythm, and restrained futuristic energy. 

The aesthetic is a hybrid of Modern Developer UI and Refined Glassmorphism. Deep, atmospheric cosmic navy canvases support crystalline translucent cards, low-profile borders, and disciplined flashes of electric cyan. Instead of overt decoration, interactive surfaces respond with subtle radial gradients, soft luminescent ambient glows, and clean monospaced micro-accents that reflect deep codecraft and system intelligence.

## Colors

The palette is engineered specifically for an immersive, zero-fatigue dark experience.

- **Background Canvas:** Grounded in rich, light-absorbing navy tones (`#0B111E` as the root base, `#0F172A` as primary panel backing).
- **Primary & Accent:** Electric Cyan (`#06B6D4`) serves as the active pulse for key conversion elements, interactive nodes, and code highlights. Supporting Teal (`#14B8A6`) and Bright Cyan (`#22D3EE`) provide luminous depth across gradients, glowing tags, and interactive hover states.
- **Neutrals & Slates:** High-contrast neutral scale ranging from pure Crisp White (`#F8FAFC`) for primary headlines, Cool Slate (`#94A3B8`) for body prose, down to Muted Slate (`#334155`) for structural dividers.
- **Glass Tinting:** Translucent overlays use `rgba(15, 23, 42, 0.75)` overlaid with subtle edge borders of `rgba(148, 163, 184, 0.12)`.

## Typography

The typographic balance pairs geometric humanism with technical monospace rigor:
- **Headlines & Body:** Plus Jakarta Sans delivers structural legibility, contemporary geometric proportions, and optical crispness across dark surfaces. Tight negative tracking on display hierarchies conveys modern technical authority.
- **Technical Badges & Code Labels:** JetBrains Mono handles tech stack tags, metrics, architectural labels, status indicators, and snippets to anchor the engineer-creator identity.

## Layout & Spacing

Layouts follow a fluid, responsive 12-column grid system capped at a maximum width of `1280px` (`80rem`), centered on the canvas:
- **Desktop (1024px+):** 12-column layout with `2rem` gutters and generous `4rem` outer margins. Content spreads dynamically across symmetric multi-column arrangements.
- **Tablet (768px – 1023px):** 8-column layout with `1.5rem` gutters and `2.5rem` outer canvas padding.
- **Mobile (<768px):** 4-column layout with single-column primary stack flow, `1rem` gutters, and `1.25rem` outer canvas padding.

Generous vertical section breathing room (`space-xl` to `5rem` equivalents) ensures individual projects, interactive sandboxes, and architectural case studies do not compete for cognitive focus.

## Elevation & Depth

Visual hierarchy uses frosted glassmorphic layering, subtle rim lighting, and luminous backdrop glow effects:

1. **Base Layer:** `#0B111E` deep space background with soft, fixed radial ambient gradients (`rgba(6, 182, 212, 0.05)` at 800px blur radius) stationed behind featured zones.
2. **Glass Container Tier:** Surfaces use `rgba(15, 23, 42, 0.65)` layered with `backdrop-filter: blur(16px)` and a micro-border of `1px solid rgba(148, 163, 184, 0.1)`.
3. **Elevated / Interactive Tier:** On hover or active state, panels shift to `rgba(15, 23, 42, 0.85)`, borders shift to `rgba(34, 211, 238, 0.4)`, accompanied by an outer luminescent cyan flare: `0 8px 32px -4px rgba(6, 182, 212, 0.18)`.
4. **Floating Overlays & Modals:** `rgba(11, 17, 30, 0.9)` with `backdrop-filter: blur(24px)`, framed with `1px solid rgba(148, 163, 184, 0.2)` and a soft shadow of `0 24px 48px -12px rgba(0, 0, 0, 0.6)`.

## Shapes

The design system maintains a balanced `Rounded` (Level 2) geometry. Core UI components (cards, interactive buttons, form containers) adhere to `0.5rem` (8px), expanding to `1rem` (16px) on overarching portfolio project cards and hero callouts. Full capsule roundness (`9999px`) is reserved exclusively for tech tags, status pips, and interactive filter pills to differentiate functional micro-data from layout blocks.

## Components

### Buttons
- **Primary Action:** Solid electric cyan gradient background (`linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)`), text in `#0B111E` bold Plus Jakarta Sans. Subtle cyan shadow glow on hover (`0 0 20px rgba(6, 182, 212, 0.45)`).
- **Secondary / Ghost:** Glass background (`rgba(15, 23, 42, 0.6)`), `1px solid rgba(148, 163, 184, 0.2)`, text in `#F8FAFC`. Transitions to cyan edge border and `rgba(6, 182, 212, 0.1)` on hover.
- **Icon Actions:** Monospaced icon hubs with `0.5rem` radii, translucent background, and cyan hover highlights.

### Tech Tags & Chips
- **Tech Stack Badge:** JetBrains Mono uppercase, `0.6875rem`, pill-shaped (`9999px`), styled with `rgba(6, 182, 212, 0.08)` surface, `1px solid rgba(6, 182, 212, 0.25)` edge, and `#22D3EE` typography.
- **Status Pip:** Features an animated ping/glow green-teal dot indicator (`#14B8A6`) signaling "Available for Engineering Leadership & Consulting".

### Project & Experiment Cards
- Layered glassmorphic container with 16px radius (`rounded-lg`), `backdrop-filter: blur(14px)`, and structural padding (`space-lg`).
- Integrated top metadata bar with GitHub repository stars, live URL links, and monospaced category labeling.
- Interactive lift (+4px Y-translation) with outer border illumination on mouseover.

### Terminal & Code Sandbox Previews
- Terminal windows built with a dedicated dark `#080C14` inner container, three top status pills (muted gray, warning amber, success teal), and syntax-highlighted JetBrains Mono snippets for creative code demonstrations.

### Inputs & Contact Elements
- Sleek inputs with `rgba(15, 23, 42, 0.7)` backgrounds, crisp slate borders, active focus state radiating an inner and outer teal boundary glow (`box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.3)`), and high-contrast `#F8FAFC` input text.