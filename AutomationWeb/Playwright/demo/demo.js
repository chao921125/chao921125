const { chromium, firefox, webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch({
    headless: false
  });  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://google.com');
  // other actions...
  // await browser.close();
})();
