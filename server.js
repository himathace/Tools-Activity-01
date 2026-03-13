const port = 3001

const exp = require('express')
const app = exp()

app.use(exp.json())
app.use(exp.urlencoded({ extended: true }))


app.use(exp.static('public'))


let submittedName = ''

app.get('/api/v1', (req, res) => {
  res.json({ message: "hello world " })
})


app.post('/submit-name', (req, res) => {
  submittedName = req.body.username || ''
  res.redirect('/welcome')
})

app.get('/welcome', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome</title>
    </head>
    <body>
      <h1>Welcome, ${submittedName}</h1>
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log('Server running on' + port)
})
