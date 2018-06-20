var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3333);

let connectedUsers = [];
let lastTenMessages = [];

io.on('connection', function (socket) {
  socket.on('user-login', function (userName) {
    const id = new Date().getTime();
    socket.userId = id;
    const user = {
      id: new Date().getTime(),
      name: userName
    };

    connectedUsers.push(user);

    socket.emit('success-login', { user, connectedUsers, lastTenMessages });
    socket.broadcast.emit('add-user', user);
  });

  socket.on('new-message', message => {
      socket.broadcast.emit('new-message', message);
      lastTenMessages = getLastTenMessages(message);
  });

  socket.on('disconnect', () => {
      connectedUsers = removeUser(connectedUsers, socket.userId);
      socket.broadcast.emit('remove-user', connectedUsers);
  });
});


// FIXME - Move to its own module
/* =========== UTILS ============== */
const removeUser = (users, userId) => {
  return users.reduce((acc, user) => {
    if (user.id !== userId) {
      acc.push(user);
    }
    return acc;
  }, [])
};

const getLastTenMessages = message => {
  let tempMessages = [...lastTenMessages, message];
  if (tempMessages.length > 10) {
    const overTen = tempMessages.length - 10;
    tempMessages = tempMessages.slice(overTen);
  }

  return tempMessages;
}
