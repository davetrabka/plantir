const { db } = require(`./models`)


const init = () => {
  db.sync({ force: true })
    .then(() => {
      console.log(`Sync successful`)
      db.close()
    })
    .catch((error) => { console.error(error) })
}
init()
