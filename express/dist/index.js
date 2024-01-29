const express = require('express')
const http = require('http')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.use('/', (req, res) => {
    res.json({
        message: 'hello node Serever',
        protocol: req.protocol || 'http',
        hostname: req.hostname || 'localhost',
        port: process.env.PORT || 5000,
        fullUrl: `${req.protocol}://${req.hostname}:${process.env.PORT}${req.url}`,
        ip: req.ip || '127.0.0.1',
        url: req.url || '/',
        method: req.method || 'GET',
        headers: req.headers || {},
        query: req.query || {},
        body: req.body || {},
        params: req.params || {},
        cookies: req.cookies || {},
        files: req.files || {},
        session: req.session || {},
        user: req.user || {},
        node_version: process.versions.node,
        platform: process.platform,
        arch: process.arch,
        release: process.release,
        pid: process.pid,
        uptime: `${process.uptime().toFixed(2)} seconds`,
        memory: process.memoryUsage(),
        execPath: process.execPath,
        cwd: process.cwd(),
        argv: process.argv,
        envPath: process.envPath
    })
})

app.use((req, res) => {
    res.status(404).json('Not Found')
})

const port = process.env.PORT
const server = http.createServer(app);

server.listen(port, () => {
    console.log(process.env.NODE_ENV)
    console.log(`app start on http://localhost:${port}`)
});