const express = require('express')
const app = express()
const compression = require('compression')

const largeObject = []
for(let i = 0; i<10000; i++){
  largeObject.push({
    name: 'gui',
    address: 'adress',
    anotherField: 'aaaa'
  })
}


app.use(compression({level:9}))
app.get('/', (req, res) => {
  res.header('Cache-Control', 'public, max-age=3600')
  res.send(largeObject)
})

app.listen(3000, () => console.log('listenning...'))