const controller = require('./controller/marvelController')

module.exports = (app) => {
  app.get('/', controller.getAllHeroes),
  app.get('/hero/:name', controller.getByHeroName)
  app.get('/actor/:name', controller.getByActorName)
}