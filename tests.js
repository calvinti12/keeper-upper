const http = require('http')
const data = JSON.stringify({
    msg: "hi"
})
const options = {
    hostname: 'localhost',
    port: 1997,
    path: "/",
    method: 'POST'
}
const req = http.request(options, res => {
    res.on('data', d => console.log(d))
}) 

req.on('error', error => console.log(error))
req.write(data)
req.end()
