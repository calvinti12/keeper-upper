const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url =='/') {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<html><body><p>hi</p></body></html')
        res.end() 
    }

    if (req.method == 'POST') {
        console.log('received POST request')
        req.on('data', chunk => console.log(chunk.toString()))
    }
}) 

server.listen(1997)

console.log('server listening on port 1997')

pingApp = (url) => {
    const date = new Date()
    const hour = date.getUTCHours()


    // pings app every 30 min from 6am EST to 9:59 pm EST
    if ([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1].includes(hour)) {
        try {
            http.get(url, { mode: 'no-cors' })
        }
        catch (err) {
        }

    } else {
        console.log("not 8 am - 9 pm EST")
    }

    return;
}

setInterval(() => {
    pingApp("http://jbops.herokuapp.com", "jbops")
    pingApp("https://restreamer-27zo.onrender.com", "restreamer")
}, 900000)

setInterval(function () {
    http.get("http://keeper-upper.herokuapp.com");
}, 900000); // every 15 minutes (900000)

