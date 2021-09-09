import faker from 'faker'
import validateAndGenerate from '../../../methods/validate-and-generate'

const dog = {
	name: faker.name.firstName(),
	age: faker.datatype.number({ min: 1, max: 20 }),
	isPedigree: faker.datatype.boolean()
}

describe('Validate form and generate dog test init', () => {
	it('should return false if given dog is invalid', async () => {
		const promise = validateAndGenerate(faker.random.objectElement())

		expect(promise).resolves.toBeDefined()
		expect(promise).resolves.toBeFalsy()
	})

	it('should return a successful message if given dog is valid', async () => {
		const promise = validateAndGenerate(dog)

		expect(promise).resolves.toBeDefined()
		expect(promise).resolves.toBe(
			`Name: ${dog.name}, Age: ${dog.age}, Pedigree: ${dog.isPedigree ? 'Yes' : 'No'}`
		)
	})
})
