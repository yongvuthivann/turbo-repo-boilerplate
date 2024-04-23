const baseConfig = require("@repo/tailwindcss-config/tailwind.config.mjs");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [...baseConfig.content],
};
