import { appConfig } from '../config/app'
import { app } from './main'

const port = appConfig.port

app.listen(port, () => {
	console.log(`🚀 Servidor rodando no endereço: ${port}`)
})
