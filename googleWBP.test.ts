import {Google} from './googleBP'
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

test('do a search', async () => {
    await google.navigate()
    await google.search('Berserk')
    let text = await google.getResults()
    expect(text).toContain('Berserk')
})
afterAll(async () => {
    await google.driver.quit()
})