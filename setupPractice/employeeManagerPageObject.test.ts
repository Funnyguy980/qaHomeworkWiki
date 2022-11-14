import { employeeManager } from "./employeeManagerPageObject";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

const page = new employeeManager(driver,"https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");

test("add employee", async () => {
    await page.navigate();
    await page.addEmployee();
    expect(await page.getResults()).toContain("New Employee"); 
});

test("edit employee", async () => {
    await page.navigate();
    await page.editEmployee();
    expect(await page.getResults()).toContain("chance")
});
afterAll(async () => {
    await driver.quit();
});