/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeDetection: false,
  },
};
