/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function(config) {
  // @see http://karma-runner.github.io/4.0/config/configuration-file.html
  config.set({
    basePath: '',
    plugins: [
      require.resolve('@open-wc/karma-esm'),
      'karma-*',
      'karma-browserstack-launcher',
    ],
    frameworks: ['esm', 'mocha', 'chai'],
    files: [
      {
        pattern: 'node_modules/focus-visible/dist/focus-visible.js',
        watched: false
      },
      {pattern: 'node_modules/@ungap/event-target/min.js', watched: false},
      {pattern: 'shared-assets/**/*', included: false},
      {
        pattern: 'lib/test/**/*-spec.js',
        included: false,
        watched: true,
        type: 'module'
      },
      {pattern: 'lib/test/index.js', watched: true, type: 'module'}
    ],
    autoWatchBatchDelay: 1000,
    restartOnFileChange: true,

    browserDisconnectTimeout: 600000,
    browserNoActivityTimeout: 0,
    captureTimeout: 420000,
    concurrency: 10,

    // @see https://github.com/open-wc/open-wc/tree/master/packages/karma-esm#configuration
    esm: {
      nodeResolve: true,
      compatibility: 'auto',
      preserveSymlinks: true,
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'tdd',
        timeout: 60000,
      },
    },

    reporters: ['mocha'],

    mochaReporter: {output: 'autowatch'},

    // Note setting --browsers on the command-line always overrides this list.
    browsers: [
      'ChromeHeadlessNoSandbox',
    ],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      }
    },
  });


  if (process.env.USE_BROWSER_STACK) {
    const browserStackLaunchers = {
      'Chrome (latest)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: 'latest',
      },
      'Chrome (latest-1)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Chrome',
        browser_version: 'latest-1',
      },
      'Edge (latest)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: 'latest',
      },
      'Edge (latest-1)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Edge',
        browser_version: 'latest-1',
      },
      'Firefox (latest)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
        browser_version: 'latest',
        browserstack: {localIdentifier: 'Firefox'}
      },
      'Firefox (latest-1)': {
        base: 'BrowserStack',
        os: 'Windows',
        os_version: '10',
        browser: 'Firefox',
        browser_version: 'latest-1',
      },
      'Safari (latest)': {
        base: 'BrowserStack',
        os: 'OS X',
        os_version: 'Monterey',
        browser: 'safari',
        browser_version: 'latest',
      },
      'iOS Safari (iOS 15)': {
        base: 'BrowserStack',
        os: 'iOS',
        os_version: '15',
        device: 'iPhone 13',
        browser: 'iPhone',
        real_mobile: 'true',
      },
      'Android 11 (Samsung)': {
        base: 'BrowserStack',
        os: 'Android',
        os_version: '11.0',
        device: 'Samsung Galaxy S21',
        browser: 'Android',
        real_mobile: 'true',
      },
    };

    config.set({
      browserStack: {
        idleTimeout: 600,
        startTunnel: false,
        localIdentifier: 'test',
        name: '<model-viewer> Unit Tests',
        project: '<model-viewer>',
        apiClientEndpoint: 'https://api.browserstack.com',
        build: process.env.BROWSER_STACK_BUILD_NAME
      },

      reporters: ['BrowserStack', 'mocha', 'dots'],

      customLaunchers: browserStackLaunchers,
      browsers: [...config.browsers, ...Object.keys(browserStackLaunchers)],
    });
  }
};