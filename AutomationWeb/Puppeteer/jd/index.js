const puppeteer = require('puppeteer');
//延时函数
function sleep(delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			try {
				resolve(1)
			} catch (e) {
				reject(0)
			}
		}, delay)
	})
}
puppeteer.launch({
	ignoreHTTPSErrors:true, 
	headless:false,slowMo:250, 
	timeout:0}).then(async browser => {

	let page = await browser.newPage();
	await page.setJavaScriptEnabled(true);
	await page.goto("https://www.jd.com/");
	const searchInput = await page.$("#key");
	await searchInput.focus(); //定位到搜索框
	await page.keyboard.type("手机");
	const searchBtn = await page.$(".button");
	await searchBtn.click();
	await page.waitForSelector('.gl-item'); //等待元素加载之后，否则获取不异步加载的元素
	const links = await page.$$eval('.gl-item > .gl-i-wrap > .p-img > a', links => {
		return links.map(a => {
			return {
				href: a.href.trim(),
				title: a.title
			}
		});
	});
	page.close();

	const aTags = links.splice(0, 10);
	for (var i = 1; i < aTags.length; i++) {
		page = await browser.newPage()
		page.setJavaScriptEnabled(true);
		await page.setViewport({width:1920, height:1080});
		var a = aTags[i];
		await page.goto(a.href, {timeout:0}); //防止页面太长，加载超时

		//注入代码，慢慢把滚动条滑到最底部，保证所有的元素被全部加载
		let scrollEnable = true;
		let scrollStep = 500; //每次滚动的步长
		while (scrollEnable) {
			scrollEnable = await page.evaluate((scrollStep) => {
				let scrollTop = document.scrollingElement.scrollTop;
				document.scrollingElement.scrollTop = scrollTop + scrollStep;
				return document.body.clientHeight > scrollTop + 1080 ? true : false
			}, scrollStep);
			await sleep(100);
		}
		await page.waitForSelector("#footer-2014", {timeout:0}); //判断是否到达底部了
		let filename = "images/items-"+i+".png";
		//这里有个Puppeteer的bug一直没有解决，发现截图的高度最大只能是16384px， 超出部分被截掉了。
		await page.screenshot({path:filename, fullPage:true});
		page.close();
	}

	browser.close();
});
