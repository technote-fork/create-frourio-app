module.exports = {
  port: 8080,
  basePath: '/api',
  helmet: true,
  dotenv: false,
  staticDir: process.env.NODE_ENV === 'production' ? 'out' : undefined,
  cors: process.env.NODE_ENV !== 'production'
}
