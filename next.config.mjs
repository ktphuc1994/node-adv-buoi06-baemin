/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util',
    'rc-pagination',
    'rc-picker',
  ],
};

export default nextConfig;
