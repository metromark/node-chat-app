var socket = io();  

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'jom@example.com',
    text: "hey. this is jom"
  })
})

socket.on('disconnect', () => {
  console.log('Disconnected from server')
})

socket.on('newMessage', function(message){
  console.log('newMessage', message)
})