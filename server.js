const http = require("http")

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
    pingApp("http://connect4riends.herokuapp.com", "connect4riends")
}, 900000)

setInterval(function () {
    http.get("http://keeper-upper.herokuapp.com");
}, 900000); // every 15 minutes (900000)

