/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  }
}




