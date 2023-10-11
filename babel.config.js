module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx"
          ],
          alias: {
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils"
          }
        },
      ],
    ]
  };
};
