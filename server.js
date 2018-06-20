var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3333);

let connectedUsers = [];

io.on('connection', function (socket) {
  socket.on('user-login', function (userName) {
    console.log(userName);
    const id = new Date().getTime();
    socket.userId = id;
    const user = {
      id: new Date().getTime(),
      name: userName
    };

    connectedUsers.push(user);

    socket.emit('success-login', { user, connectedUsers });
    socket.broadcast.emit('add-user', user);
  });

  socket.on('disconnect', () => {
      connectedUsers = removeUser(connectedUsers, socket.userId);
      socket.broadcast.emit('remove-user', connectedUsers);
  });
});


//---------------
const removeUser = (users, userId) => {
  return users.reduce((acc, user) => {
    if (user.id !== userId) {
      acc.push(user);
    }
    return acc;
  }, [])
}
