const puppeteer = require("puppeteer");
const fs = require("fs");

let browser;
beforeAll(async () => {
  browser = await puppeteer.launch({ headless: "new" });
});

afterAll(async () => {
  await browser.close();
});
test("Third task", async () => {
  const page = await browser.newPage();

  const fileUrl = "file://" + __dirname + "/../index.html";
  await page.goto(fileUrl);
  await new Promise((r) => setTimeout(r, 1000));
  const firstElement = await page.evaluate(() => {
    const mainDiv = document.querySelector(".elements-direction");
    return mainDiv.firstElementChild.tagName;
  });
  const lastElement = await page.evaluate(() => {
    const mainDiv = document.querySelector(".elements-direction");
    return mainDiv.lastElementChild.tagName;
  });

  expect(firstElement).toEqual("DIV");
  expect(lastElement).toEqual("H3");
});