const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to our page')
    }
    if(req.url === '/about'){
        res.end('here is our history')
    }
    res.end('no result')
})

server.listen(5000)