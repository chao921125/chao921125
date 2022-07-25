// consnt fs = require('fs');

const puppeteer = require('puppeteer');

(async () => {
// https://blog.fundebug.com/2
// 官方api：https://zhaoqize.github.io/puppeteer-api-zh_CN/
// 创建browser实例，打开内置浏览器
// 创建browser实例，executablePath指定浏览器路径，打开自定义浏览器017/11/01/guide-to-automating-scraping-the-web-with-js/
// https://segmentfault.com/a/1190000014403160
// https://juejin.im/post/5af6876b518825426726218f
// https://juejin.im/post/5af68787f265da0ba0633b14
// https://github.com/ruizer/puppeteer-demo

// /Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge
// /Applications/Google Chrome.app/Contents/MacOS/Google Chrome
    const optionsLaunch = {
        headless: false,
        defaultViewport: {
        width: 1200,
        height: 900
        },
        // slowMo: 250,
        timeout: 0,
        // devtools: true
        // executablePath: "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
    }
    const indexBrowser = await puppeteer.launch(optionsLaunch);

    const indexPage = await indexBrowser.newPage();
    recursive(indexBrowser, indexPage, 0);
    
})();

async function recursive(indexBrowser, indexPage, sum) {
    indexPage.setDefaultNavigationTimeout(0);
    await indexPage.goto('https://so.gushiwen.org/guwen/');
    await indexPage.mainFrame().addScriptTag({
        url: 'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js'
    });
    await indexPage.waitForSelector('.divimg');
    
    debugger
    const aaaa = await indexPage.$("body > div.main3 > div.left > div.titletype > div:nth-child(5) > div.sright > a:nth-child(1)");
    let tttt = indexPage.$eval("body > div.main3 > div.left > div.titletype > div:nth-child(5) > div.sright > a:nth-child(1)", e => e.innerText)
    
    console.log(tttt);


    const links = await indexPage.$$('.divimg a');
    // const arrayLink = await indexPage.evaluate(() => {
    //     let array = new Array();
    //     $('.divimg').each(() => {
    //         array.push($(this).find('a').attr('href'));
    //     });
    //     return array;
    // })
    for(let i of links) {
        // const aPage = await indexBrowser.newPage();
        await i.click();
        break;
        // aPage.waitForTimeout(5000);
        // aPage.close();
    }
    await indexPage.goto('https://so.gushiwen.org/guwen/');
    for(let o of await indexBrowser.pages()) {
        await o.close();
    }

    // console.log(indexBrowser.pages());
    // console.log(links);
    sum++;
    if(sum < 5) {
        const page = await indexBrowser.newPage();
        recursive(indexBrowser, page, sum);
    }
}