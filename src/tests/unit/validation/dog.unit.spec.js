import faker from 'faker'
import { ValidationError } from 'yup'
import schema from '../../../validation/dog'

const input = {
	name: faker.name.findName(),
	age: faker.datatype.number({ min: 1, max: 20 }),
	isPedigree: faker.datatype.boolean()
}

describe('Dog schema validation test init', () => {
	it('should throw if name field is invalid', async () => {
		const validate = schema.validate({
			...input,
			name: faker.datatype.string(21)
		})

		expect(validate).rejects.toBeInstanceOf(ValidationError)
		expect(validate).rejects.toThrowError('name must be at most 20 characters')
	})

	it('should throw if age field is invalid', async () => {
		const validate = schema.validate({
			...input,
			age: faker.datatype.number({ min: 11 })
		})

		expect(validate).rejects.toBeInstanceOf(ValidationError)
		expect(validate).rejects.toThrowError('age must be less than or equal to 20')
	})

	it('should successfully validate input', async () => {
		const validate = schema.validate(input)

		expect(validate).resolves.toBeTruthy()
		expect(validate).resolves.not.toThrow()
	})
})
