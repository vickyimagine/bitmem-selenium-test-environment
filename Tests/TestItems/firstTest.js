const {Builder, By, Key} = require("selenium-webdriver");

const firstTest = async () => {
  console.log("This is the first test....");

  //launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  //navigate to our applications

  await driver.get("https://www.bitmemoir.com/en/login");

  //find element
  await driver
    .findElement(By.xpath("/html/body/div/div/form/div[1]/input"))
    .sendKeys("whyviccky");
  await driver
    .findElement(By.xpath("/html/body/div/div/form/div[2]/input"))
    .sendKeys("12345");
  await driver.findElement(By.xpath("/html/body/div/div/form/div[4]/button")).click();

  await driver.quit();
};

module.exports = {firstTest};
