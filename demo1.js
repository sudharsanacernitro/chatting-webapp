const someFunction = (l) => {
const express = require('express')
const connections = new Map();
const webserver = express()
webserver.set('view engine', 'ejs');
 webserver.use((req, res) =>
   res.sendFile('/public/1.ejs', { root: __dirname })
 )
 .listen(100, () => console.log(`Listening on 3000`))
const { WebSocketServer } = require('ws')
const sockserver = new WebSocketServer({ port: 443 })
sockserver.on('connection', (ws,req) => {
  const queryString = req.url.split('?'); // Extract the query string from the URL
console.log(queryString[1])
sockserver.clients.forEach(client => {
     client.send(`${queryString[1]+'&user'}`)
   })
 console.log(queryString[1]+'connected!')
 ws.send('connection established')
 ws.on('close', () => console.log('Client has disconnected!'))
 ws.on('message', data => {
   sockserver.clients.forEach(client => {
     console.log(`distributing message: ${data}`)
     client.send(`${data}`)
   })
 })
 ws.onerror = function () {
   console.log('websocket error')
 }
})
};

module.exports = {
  someFunction,
};
