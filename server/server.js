const express = require('express');
const model = require('./model')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const Chat = model.getModel('chat')
const app = express()
//work with express
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function(socket){
  socket.on('sendmsg', function(data){
    const {from, to, msg} = data
    const create_time = new Date().getTime()
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid, from, to, create_time: create_time, content: msg}, function(err, doc){
      io.emit('recvmsg', Object.assign({}, doc._doc))
    })
  })
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.get("/",function(req,res){
	res.send("<h1>Hello World</h1>")
})
server.listen(9093,function(){
  console.log("Node app start at port 9093")
})

