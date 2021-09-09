import faker from 'faker'
import validateDog from '../../../validation/validate-dog'

const input = {
	name: faker.name.findName(),
	age: faker.datatype.number({ min: 1, max: 20 }),
	isPedigree: faker.datatype.boolean()
}

describe('Validate form test init', () => {
	it('should return false if form is invalid', async () => {
		const response = await validateDog(faker.random.objectElement({}))

		expect(response).toBeDefined()
		expect(response).toBeFalsy()
	})

	it('should return true if form is valid', async () => {
		const response = await validateDog(input)

		expect(response).toBeDefined()
		expect(response).toBeTruthy()
	})
})
