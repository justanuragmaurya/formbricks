/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#fbjs",
  prefix: "fb-",
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--fb-brand-color)",
        "on-brand": "var(--fb-brand-text-color)",
        border: "var(--fb-border-color)",
        "border-highlight": "var(--fb-border-color-highlight)",
        focus: "var(--fb-focus-color)",
        heading: "var(--fb-heading-color)",
        subheading: "var(--fb-subheading-color)",
        placeholder: "var(--fb-placeholder-color)",
        "info-text": "var(--fb-info-text-color)",
        signature: "var(--fb-signature-text-color)",
        "branding-text": "var(--fb-branding-text-color)",
        "survey-bg": "var(--fb-survey-background-color)",
        "survey-border": "var(--fb-survey-border-color)",
        "accent-bg": "var(--fb-accent-background-color)",
        "accent-selected-bg": "var(--fb-accent-background-color-selected)",
        "input-bg": "var(--fb-input-background-color)",
        "input-bg-selected": "var(--fb-input-background-color-selected)",
        placeholder: "var(--fb-placeholder-color)",
        "rating-fill": "var(--fb-rating-fill)",
        "rating-focus": "var(--fb-rating-hover)",
        "rating-selected": "var(--fb-rating-selected)",
        "back-button-border": "var(--fb-back-btn-border)",
        "submit-button-border": "var(--fb-submit-btn-border)",
        "close-button": "var(--fb-close-btn-color)",
        "close-button-focus": "var(--fb-close-btn-hover-color)",
        "calendar-tile": "var(--fb-calendar-tile-color)",
      },
      borderRadius: {
        custom: "var(--fb-border-radius)",
      },
      zIndex: {
        999999: "999999",
      },
    },
  },
  plugins: [],
};
