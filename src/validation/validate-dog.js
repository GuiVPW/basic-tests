import schema from './dog'

export const validateDog = async value => {
	try {
		await schema.validate(value)

		return true
	} catch {
		return false
	}
}

export default validateDog
