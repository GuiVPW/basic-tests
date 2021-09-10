import request from 'supertest'
import { app } from '../../../../api/main'

describe('GetUsersController test init', () => {
	test('GET /api/users 200', async () => {
		const call = await request(app).get('/api/users').expect(200)

		expect(call.statusCode).toEqual(200)
		expect(call.body).toBeDefined()
		expect(call.body.total).toEqual(10)
		expect(call.body.users).toBeDefined()
		expect(call.body.users).toBeInstanceOf(Array)
		expect(call.body.users.length).toEqual(call.body.total)
	})
})
