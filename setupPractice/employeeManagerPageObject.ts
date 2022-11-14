import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
} from "selenium-webdriver";
import { elementsLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder ()
.withCapabilities(Capabilities.chrome())
.build();

export class employeeManager {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
    addEmployeeBtn: By = By.name("addEmployee")
    newEmployeeBtn: By = By.xpath('//li[@id="employee10"]')
    employeeList: By = By.className("listContainer")
    nameField: By = By.name("nameEntry")
    saveBtn: By = By.name("save")
    constructor(driver: WebDriver, url: string){
        this.driver = driver
        this.url = url
    }

    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.addEmployeeBtn))
    }
    async addEmployee() {
        await this.driver.wait(until.elementLocated(this.addEmployeeBtn))
        await this.driver.findElement(this.addEmployeeBtn).click();
    }
    async editEmployee() {
        await this.driver.wait(until.elementLocated(this.newEmployeeBtn))
        await this.driver.findElement(this.newEmployeeBtn).click();
        await this.driver.wait(until.elementLocated(this.nameField))
        await this.driver.findElement(this.nameField).clear();
        await this.sendKeys(this.nameField, "chance")
        await this.driver.findElement(this.saveBtn).click();
    }
    async sendKeys( elementBy: By, keys: string) {
        await this.driver.wait(until.elementLocated(elementBy))
        return driver.findElement(elementBy).sendKeys(keys)
    }
    async getResults() {
        return this.driver.findElement(this.employeeList).getText();
    }
}