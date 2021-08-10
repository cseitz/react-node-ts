// server code

import test from '@lib/test'

console.log({ test })

import express from 'express';

const prod = process.env.NODE_ENV === 'production'
const app = express();

const port = 3000;

import proxy from 'express-http-proxy'
if (prod) {
    const dist = process.cwd() + '/build/client';
    app.use(express.static(dist), (req, res) => {
        res.sendFile(dist + '/index.html')
    })
} else {
    app.use(proxy('http://localhost:' + (process.env?.HOT || port + 1)))
}

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});