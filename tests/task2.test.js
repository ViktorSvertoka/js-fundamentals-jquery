const puppeteer = require("puppeteer");
const fs = require("fs");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterAll(async () => {
  await browser.close();
});

test("Second task", async () => {
  const page = await browser.newPage();

  const fileUrl = "file://" + __dirname + "/../index.html";
  await page.goto(fileUrl);
  await new Promise((r) => setTimeout(r, 1000));

  const linkAttribute = await page.evaluate(() => {
    const link = document.querySelector("a");
    return link.getAttribute("target");
  });

  expect(linkAttribute).toEqual("_blank");
});