const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 3000);
  });

  test("Draw button works", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id('draw')).click();

    await driver.findElement(By.id('choices')).isDisplayed(true)
    await driver.sleep(1000)
  });

  test("add to duo button works", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
    await driver.findElement(By.id('draw')).click();

    await driver.sleep(500)

    await driver.findElement(By.className('bot-btn')).click();
    await driver.findElement(By.id('player-duo')).isDisplayed(true)
    await driver.sleep(1000)
  })
});