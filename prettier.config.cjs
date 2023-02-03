/** @type {import("prettier").Config} */
module.exports = {
  tailwindConfig: './tailwind.config.cjs',
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
