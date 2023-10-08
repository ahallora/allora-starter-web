import { withSentryConfig } from "@sentry/nextjs";

export const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
};

export default nextConfig;

// export default withSentryConfig(nextConfig, {
// // For all available options, see:
// // https://github.com/getsentry/sentry-webpack-plugin#options

// // Suppresses source map uploading logs during build
// silent: true,
// org: "insert-sentry-org-name",
// project: "insert-sentry-project-name",
// }, {
// // For all available options, see:
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// // Upload a larger set of source maps for prettier stack traces (increases build time)
// widenClientFileUpload: false,

// // Transpiles SDK to be compatible with IE11 (increases bundle size)
// transpileClientSDK: false,

// // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
// tunnelRoute: "/monitoring",

// // Hides source maps from generated client bundles
// hideSourceMaps: true,

// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,
// });
