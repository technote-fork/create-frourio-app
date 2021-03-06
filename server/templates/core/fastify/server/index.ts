import path from 'path'
import Fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import fastifyStatic from 'fastify-static'
import fastifyJwt from 'fastify-jwt'<% if (orm === 'none') { %>
import { createDBFileIfNotExists } from './service/tasks'<% } %>
import { JWT_SECRET, SERVER_PORT, BASE_PATH } from './service/envValues'
import server from './$server'

const fastify = Fastify()

fastify.register(helmet)
fastify.register(cors)
fastify.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: BASE_PATH
})
fastify.register(fastifyJwt, { secret: JWT_SECRET })
<% if (orm === 'none') { %>
createDBFileIfNotExists(path.join(__dirname, 'database.json'))<% } %>
server(fastify, { basePath: BASE_PATH })

fastify.listen(SERVER_PORT)
