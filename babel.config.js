module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],

  ],

  overrides: [
    {
      test: "./node_modules/ethers",
      plugins: [
        "@babel/plugin-proposal-private-methods", { loose: true },
      ],
    },
  ],
};
