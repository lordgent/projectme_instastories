module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/Login",
      },
      {
        source: "/register",
        destination: "/auth/Register",
      },
    ];
  },
};
