const puppeteer = require('puppeteer');


const timeout = 10000;
let page;

beforeEach(async() => {
    const browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:8000', {waitUntil: "networkidle2"});
});

describe("Zip Validations", () => {
    test("Verify the empty value in zip field", async () => {
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
        await page.click('#send-btn');
        let element = await page.$('div#invalid-message-zip');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid zip.');
        await page.close();      
    });
    test("Verify the wrong value in zip field", async () => {
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
        await page.type('#zip','4000347');
        await page.click('#send-btn');
        let element = await page.$('div#invalid-message-zip');
        let value = await page.evaluate(el => el.innerText, element);
        expect(value.trim()).toBe('Please provide a valid zip.');
        await page.close();
    });
    test("Verify the correct value in zip field", async () => {
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

