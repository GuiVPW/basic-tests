import { Router } from 'express'
import { GetUsersController } from '../controllers/get-users.controller'

export const router = Router()

router.get('/users', async (_, res) => {
	const controller = new GetUsersController()

	const result = await controller.execute()

	return res.status(200).json(result)
})
