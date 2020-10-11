

const io = require('socket.io')(4001);

const users={}

io.on('connection' , socket  =>{
    // socket.on('new user', name =>{
    //        users[socket.id] = name
    //        socket.broadcast.emit('user-connected', name )
    //     })

socket.on('send-chat-message' , message => {
 socket.broadcast.emit('send-chat-message' , message)
 
})
socket.on('typing', data =>{
    socket.broadcast.emit('typing',data)
})
})

