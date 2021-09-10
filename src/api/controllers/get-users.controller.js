import { generateUser } from '../../methods/generate-user'

export class GetUsersController {
	async execute() {
		const users = new Array(10).fill({}).map(() => generateUser())

		const identifiedUsers = users.map((value, index) => ({ ...value, id: index }))

		return {
			total: identifiedUsers.length,
			users: identifiedUsers
		}
	}
}
