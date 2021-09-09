import { validateDog } from '../validation'
import generateDog from './generate-dog'

export const validateAndGenerate = async dog => {
	const validated = await validateDog(dog)

	if (!validated) {
		return false
	}

	return generateDog(dog)
}

export default validateAndGenerate
