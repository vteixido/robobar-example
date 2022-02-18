// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('test1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('test1', async function() {
    // Test name: test1
    // Step # | name | target | value
    // 1 | open | / | 
    await driver.get("http://localhost:3000/")
    // 2 | setWindowSize | 1097x1034 | 
    await driver.manage().window().setRect({ width: 1097, height: 1034 })
    // 3 | click | css=.ng-scope:nth-child(1) > td .input-group-append > .btn | 
    await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()
    // 4 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn | 
    await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
    // 5 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 6 | click | id=ageInput | 
    await driver.findElement(By.id("ageInput")).click()
    // 7 | type | id=ageInput | 18
    await driver.findElement(By.id("ageInput")).sendKeys("18")
    // 8 | click | css=.alert | 
    await driver.findElement(By.css(".alert")).click()
    // 9 | mouseDownAt | css=.btn-success | 44.65625,26.09375
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    // 10 | mouseMoveAt | css=.btn-success | 44.65625,26.09375
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 11 | mouseUpAt | css=.btn-success | 44.65625,26.09375
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    // 12 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 13 | click | id=ageInput | 
    await driver.findElement(By.id("ageInput")).click()
    // 14 | type | id=ageInput | 18.001
    await driver.findElement(By.id("ageInput")).sendKeys("18.001")
    // 15 | click | css=.ng-submitted | 
    await driver.findElement(By.css(".ng-submitted")).click()
    // 16 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 17 | mouseOver | css=.btn-success | 
    {
      const element = await driver.findElement(By.css(".btn-success"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 18 | click | css=.ng-scope:nth-child(1) > td .input-group-append > .btn | 
    await driver.findElement(By.css(".ng-scope:nth-child(1) > td .input-group-append > .btn")).click()
    // 19 | click | css=.ng-scope:nth-child(2) > td .input-group-append > .btn | 
    await driver.findElement(By.css(".ng-scope:nth-child(2) > td .input-group-append > .btn")).click()
    // 20 | click | css=.btn-success | 
    await driver.findElement(By.css(".btn-success")).click()
    // 21 | assertValue | css=tr:nth-child(4) > .ng-binding | 0
    {
      const value = await driver.findElement(By.css("tr:nth-child(4) > .ng-binding")).getAttribute("value")
      assert(value == "0")
    }
  })
})