/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// module.exports = {
//     reactStrictMode: true,
//     async rewrites() {
//       return [
//         {
//           source: "/humans.txt",
//           destination: "/api/humans",
//         },
//       ];
//     },
//     publicRuntimeConfig: {
//       modifiedDate: new Date().toISOString(),
//     },
//   };

// const fs = require("fs");

// const version = fs.readFileSync("./.version", "utf8");
// const lastUpdatedAt = fs.readFileSync("./.last-updated", "utf8");

// module.exports = {
//   env: {
//     NEXT_PUBLIC_PACKAGE_VERSION: version,
//     NEXT_PUBLIC_LAST_UPDATED_AT: lastUpdatedAt,
//   },
// };
