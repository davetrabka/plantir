const { db, Gardener, Plot, Vegetable } = require(`./models`)
const VegetablePlot = db.model('vegetable_plot')


const init = () => {
  db.sync()  // { force: true }
    .then(() => {
      console.log(`Sync successful`)
    })
    .catch((error) => { console.error(error) })
}
init()

// const lettuce = { name: `lettuce`, color: `green` }
// const beet = { name: `beet`, color: `purple` }

const matt = { name: `Matt`, age: 29 }
const dave = { name: `dave`, age: 28 }

Gardener.create(matt)
  .then(gardener =>
    Vegetable.create({ name: `carrot`, color: `orange`, gardener: gardener.id })
  )
  .then(veg =>
    Plot.create({ size: 7856, shaded: true, vegs: veg.id })
  )
  .then(plot =>
    VegetablePlot.create({
      vegetableId: plot.vegs,
      plotId: plot.id
    })
  )
