const mockDatabase = require('./../database/marvel.json')

module.exports = {
  getAllHeroes: (req, res) => {
    if (mockDatabase.length === 0) {
      return res.status(404).send('No hero in database')
    }
    res.status(200).json(mockDatabase)
  },

  getByHeroName: (req, res) => {
    if (!req.params.name) {
      return res.status(400).send('Missing Hero name')
    }
    const hero = req.params.name.toString().toLowerCase()
    const filterData = mockDatabase.filter(character => {
        return character['Character Name'].toLowerCase().includes(hero)
    })
    if (filterData.length === 0) {
      return res.status(404).send('Hero not found.')
    }
    return res.status(200).json(filterData)
  },

  getByActorName: (req, res) => {
    if (!req.params.name) {
      return res.status(400).send('Missing Hero name')
    }
    const actor = req.params.name.toString().toLowerCase()
    const filterData = mockDatabase.filter(character => {
        return character['Actor Name'].toLowerCase().includes(actor)
    })
    if (filterData.length === 0) {
      return res.status(404).send('Hero not found.')
    }
    return res.status(200).json(filterData)
  }
}
