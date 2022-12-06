/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
  swcMinify: true,
  env: {
    PROVIDER_CLIENT_ID: 'PROVIDER_CLIENT_ID',
    PROVIDER_CLIENT_SECRET: 'PROVIDER_CLIENT_SECRET',
    NEXTAUTH_SECRET: 'NEXTAUTH_SECRET',
    NEXTAUTH_URL: 'hNEXTAUTH_URL',
    NEXTAUTH_URL_INTERNAL: 'NEXTAUTH_URL_INTERNAL',
  },
  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
