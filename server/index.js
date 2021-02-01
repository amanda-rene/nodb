const express = require ("express")
const ctrl = require ("./controller.js")

const app = express()

app.use(express.json())

app.get('/api/weapons', ctrl.getWeapon)
app.post('/api/weapons', ctrl.addWeapon)
app.put('/api/weapons/:id', ctrl.updateCart)
app.delete('/api/weapons/:id', ctrl.deleteWeapon)

const port = 4004

app.listen(port, () => console.log(`Listening on port: ${port}`))

