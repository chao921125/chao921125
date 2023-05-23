module.exports = {
  // eslint-disable-next-line global-require
  syntax: require("postcss-scss"),
  plugins: [
    // eslint-disable-next-line global-require
    require("@csstools/postcss-sass"),
    // eslint-disable-next-line global-require
    require("autoprefixer"),
    // eslint-disable-next-line global-require
    require("postcss-preset-env")({
      stage: 1,
    }),
    // eslint-disable-next-line global-require
    require("stylelint"),
    // eslint-disable-next-line global-require
    // require("precss"),
  ],
};
