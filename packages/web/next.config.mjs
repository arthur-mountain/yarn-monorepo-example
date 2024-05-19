/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["^react-natvie$"] = "react-native-web";
    return config;
  },
};

/*
 *
* alias react reference?
module.exports = {
  // ... 其他配置 ...
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
};
 * */
export default nextConfig;
