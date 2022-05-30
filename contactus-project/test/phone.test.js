const puppeteer = require('puppeteer');


const timeout = 10000;
let page;

beforeEach(async() => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:8000', {waitUntil: "networkidle2"});
});

describe("Phone Validations", () => {
    test("Verify the empty value in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','7987654321')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-validation-phone');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid phone.');
        await page.close();      
    });
    test("Verify the wrong value in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone');
        await page.type('#phone','2345678912')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','7987654321')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-validation-phone');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid phone.');
        await page.close();
    });
    test("Verify the lower boundary length in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone');
        await page.type('#phone','8912')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','798765432')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-validation-phone');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid phone.');
        await page.close();
    });
    test("Verify the higher boundary length in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone');
        await page.type('#phone','98765432101')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','7987654321')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-validation-phone');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid phone.');
        await page.close();
    });
    test("Verify the wrong data type in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone');
        await page.type('#phone','8912')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','7987654321')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-validation-phone');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid phone.');
        await page.close();
    });
    test("Verify the correct value in Phone field", async () => {
        const title = await page.title();
        await page.evaluate(()=>document.querySelector('#contactuslink').click())
        await page.waitForSelector('#firstname');
        await page.type('#firstname','chinmay')
        await page.waitForSelector('#lastname');
        await page.type('#lastname','puranik')
        await page.waitForSelector('#phone');
        await page.type('#phone','7123456789')
        await page.waitForSelector('#phone2');
        await page.type('#phone2','7987654321')
        await page.waitForSelector('#address');
        await page.type('#address','Mumbai Central');
        await page.waitForSelector('#zip');
        await page.type('#zip','400034');
        await page.click('#send-btn');
        let element = await page.$('h1#response-message');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Successfully Submitted');
        await page.close();
    });
});