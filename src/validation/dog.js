import { object, string, number, boolean } from 'yup'

const dogSchema = object().shape({
	name: string().max(20).required(),
	age: number().min(1).max(20).required(),
	isPedigree: boolean().optional().default(false)
})

export default dogSchema
