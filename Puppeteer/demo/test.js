const puppeteer = require('puppeteer');

puppeteer.launch({headless: false, ignoreDefaultArgs: ["--enable-automation"]}).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://google.com');
//   await browser.close();
});