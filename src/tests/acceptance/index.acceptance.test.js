import faker from 'faker'
import puppeteer from 'puppeteer'
import path from 'path'

const dog = {
	name: faker.name.firstName(),
	age: faker.datatype.number({ min: 1, max: 20 }),
	isPedigree: faker.datatype.boolean()
}

describe('Acceptance test init', () => {
	let browser
	let page

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 40,
			defaultViewport: {
				width: 1920,
				height: 1080
			}
		})

		page = await browser.newPage()

		await page.setContent(URL, {
			waitUntil: ['load', 'networkidle0', 'domcontentloaded']
		})
	}, 5000)

	afterAll(async () => {
		await browser.close()
	})

	it('should be defined', () => {
		expect(browser).toBeDefined()
		expect(page).toBeDefined()
	})

	describe('execute', () => {
		it('should run page', async () => {
			const pageHtml = await page.goto(
				`file://${path.resolve(__dirname, '../../..', 'build', 'index.html')}`
			)

			expect(pageHtml).toBeDefined()
		})

		it('should get page title', async () => {
			const title = await page.title()

			expect(title).toBe('Assignment')
		})

		it('should create a dog and display it in a list', async () => {
			await page.waitForSelector('form')

			await page.type('input[name="name"]', dog.name)
			await page.type('input[name="age"]', String(dog.age))
			await page.click(`input[name="pedigree"][value="${String(dog.isPedigree)}"]`)

			await page.click('#submit-button')

			await page.waitForSelector('#dogs-list')

			const createdDog = await page.$eval('#dog-item', item => item.innerText)

			expect(createdDog).toBeDefined()
			expect(createdDog).toBe(
				`Name: ${dog.name}, Age: ${dog.age}, Pedigree: ${dog.isPedigree ? 'Yes' : 'No'}`
			)
		}, 10000)
	})
})
