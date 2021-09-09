import faker from 'faker'
import generateDog from '../../../methods/generate-dog'

const dog = {
	name: faker.name.findName(),
	age: faker.datatype.number({ min: 1, max: 20 })
}

describe('Generate dog test init', () => {
	it('should successfully generate a dog with pedigree', async () => {
		const generated = generateDog({ ...dog, isPedigree: true })

		expect(generated).toBeDefined()
		expect(generated).toBe(`Name: ${dog.name}, Age: ${dog.age}, Pedigree: Yes`)
	})

	it('should successfully generate a dog without pedigree', async () => {
		const generated = generateDog({ ...dog, isPedigree: false })

		expect(generated).toBeDefined()
		expect(generated).toBe(`Name: ${dog.name}, Age: ${dog.age}, Pedigree: No`)
	})
})
