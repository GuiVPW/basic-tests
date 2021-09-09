import generateError from '../../../methods/generate-error'

describe('Generate error test init', () => {
	it('should successfully generate the error message', async () => {
		const generated = generateError()

		expect(generated).toBeDefined()
		expect(generated).toBe('Oops! Are you sure you inserted the correct fields?')
	})
})
