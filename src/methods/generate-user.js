import faker from 'faker'

export const generateUser = () => ({
	name: faker.name.findName(),
	age: faker.datatype.number(100)
})
