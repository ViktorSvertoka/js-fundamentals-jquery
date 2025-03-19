const puppeteer = require("puppeteer");
const fs = require("fs");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterAll(async () => {
  await browser.close();
});

test("Fourth task", async () => {
  const page = await browser.newPage();

  const fileUrl = "file://" + __dirname + "/../index.html";
  await page.goto(fileUrl);
  await new Promise((r) => setTimeout(r, 1000));

  const first = await page.$(".first");
  const second = await page.$(".second");
  const third = await page.$(".third");

  await first.click();
  await second.click();
  await third.click();

  const isElementDisabled = await page.evaluate(() => {
    const element = document.querySelector(".first");
    return element ? element.disabled : null;
  });

  expect(isElementDisabled).not.toBeNull();
});