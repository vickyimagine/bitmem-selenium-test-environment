const {Builder, By} = require("selenium-webdriver");
const {describe, it} = require("mocha");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const should = chai.should();

describe("Username length check", () => {
  it("should check that username length is greater than or equal to 5 and smaller than 15", async function () {
    this.timeout(10000); // Adjust the timeout if necessary

    // Using async function directly
    try {
      // launch the browser
      let driver = await new Builder().forBrowser("chrome").build();

      // navigate to the application
      await driver.get("https://www.bitmemoir.com/en/login");

      // switch to the signUp page
      await driver
        .findElement(By.xpath("/html/body/div/div/div[3]/div[2]/div/button"))
        .click();

      // find element to enter the test input
      await driver
        .findElement(By.xpath("/html/body/div/div/form/div[1]/input"))
        .sendKeys("vivek");

      // get the username text
      const username = await driver
        .findElement(By.xpath("/html/body/div/div/form/div[1]/input"))
        .getAttribute("value");

      // check username length using should assertions
      username.length.should.be.gte(5).and.lt(15);

      // quit the browser
      await driver.quit();
    } catch (error) {
      // Handle errors, if any
      console.error("Test failed with error:", error);
      throw error; // Re-throw the error to fail the test explicitly
    }
  });
});
