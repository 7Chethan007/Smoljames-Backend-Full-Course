// The adress of the server connected to the network is:
// URL -> http://localhost:8383
// ip -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// Middleware
app.use(express.json())


// ENDPOINTS - HTTP verbs (methods) & routes (or paths)
// This method informs the nature of request and the route is a further
// subdirectory (basically we direct the request to the body of code to respond
// appropriately, and these locations or routes are called endpoints)


// Type - 1
// Website endpoints (for send webpages that comes with an url)
app.get('/', (req, res) => {
    // this is endpoint number 1 - /
    // console.log('I hit an end point', req.method)
    // res.sendStatus(201)
    // res.send('<h1>Home Page </h1>')
    console.log('User requested home page')
    res.send(`
        <body
        style="background:pink;color:blue;">
        <h1>DATA</h1>
            <p>${JSON.stringify(data)}</p>
            <a href='/dashboard'>DASHBOARD</a>
        </body>
        <script>console.log('This is my script')</script>
        `)
})

app.get('/dashboard', (req, res) => {
    // console.log('I hit dashboardd end point')
    // res.send('hi')
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href='/'>Home</a>
        </body>
        
        `)
})


// Type - 2
// API endpoints

// CRUD-Method -- Create-POST Read-GET Update-PUT and Delete-DELETE

app.get('/api/data',(req,res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})

// Post from client to server
app.post('/api/data',(req,res) => {
    // someone want to create a user for eg. Sign Up
    // the user clicks the sign up button after entering their credentials, and
    // their brower is wired up to send out a network request to the server to handle that action

    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    // data.push("pes")
    res.sendStatus(201)
})

app.delete('/api/data',(req,res) => {
    data.pop()
    console.log("we deleted")
    res.sendStatus(203)
})


// console.log('This is an extra line')
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))