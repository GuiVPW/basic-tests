import faker from 'faker'
import { generateUser } from '../../../methods/generate-user'

describe('Generate User test init', () => {
	afterAll(() => {
		jest.resetAllMocks()
	})

	it('should successfully generate a user', () => {
		const finalUser = {
			name: faker.name.findName(),
			age: faker.datatype.number(100)
		}

		jest.spyOn(faker.name, 'findName').mockReturnValueOnce(finalUser.name)
		jest.spyOn(faker.datatype, 'number').mockReturnValueOnce(finalUser.age)

		const handler = generateUser()

		expect(handler).toBeDefined()
		expect(handler).toMatchObject(finalUser)
	})
})
