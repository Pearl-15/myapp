//Import packages
//npm init
//
const express = require('express')
const { get } = require('express/lib/response')
const morgan = require('morgan')

//Configure out port
//check if it is set in the environment variable, if not then we default to 3000
const port = process.env.PORT || 3000

//Create an instance of express application
const app = express()

//Log all request 
app.use(morgan('common'))

//GET/
app.get('/',(req,resp)=>{

    //what is the media type? (return HTML content)
    resp.type('text/html')

    //set the status code
    resp.status(200)
    
    //send the response
    resp.send(`<h1> The current time is ${new Date()}</h1> <img src="/static/Unicode Keyboard Layout.jpg"`)
})

//serve static resource
addEventListener.use("/static", express.static(_dirname+"static"))
//Start our web application
app.listen(port,()=> {
    console.info(`Starting application on the port ${port} at ${new Date()}`)
})


console.info(`port=${port}`)