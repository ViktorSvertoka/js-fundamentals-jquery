const puppeteer = require("puppeteer");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterAll(async () => {
  await browser.close();
});

test("First task", async () => {
  const page = await browser.newPage();

  const fileUrl = "file://" + __dirname + "/../index.html";
  await page.goto(fileUrl);
  await new Promise((r) => setTimeout(r, 1000));
  const h2Element = await page.evaluate(() => {
    const h1Element = document.querySelector("h2.head");
    return getComputedStyle(h1Element).backgroundColor;
  });

  const spanInnerFontSize = await page.evaluate(() => {
    const h1Element = document.querySelector("h2 .inner");
    return getComputedStyle(h1Element).fontSize;
  });

  expect(h2Element).toEqual("rgb(0, 128, 0)");
  expect(spanInnerFontSize).toEqual("35px");
  await browser.close();
});