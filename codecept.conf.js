const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  grep: process.env.profile,
  tests: './test_repo/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.extramarks.com',
      show: true,
      windowSize:'1200x900'
},

     ResembleHelper : {
       require: 'codeceptjs-resemblehelper',
       screenshotFolder : './output/',
       baseFolder: './screenshots/base/',
       diffFolder: './screenshots/diff/'
     }


  },
  include: {
    I: './steps_file.js',
    login_obj: './test_obj_repo/login_obj.js',
    base_obj: './test_obj_repo/base_obj.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'extramarks_puppeteer',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}