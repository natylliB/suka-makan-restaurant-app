// eslint-disable-next-line import/no-extraneous-dependencies
const { setHeadlessWhen, setCommonPlugins, setWindowSize } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
setWindowSize(1200, 900);

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps',
};
