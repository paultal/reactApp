import openSocket from 'socket.io-client';
const socket = openSocket('10.210.86.82:8000');

function login(user){
    socket.emit('login',user)
}
 
function sendMessage(message){
    socket.emit('message',message)
}

function subscribeToMessage(cb){
    socket.on('message', message => cb(message))
}

// function subscribeToTimer(interval, cb) {
//     socket.on('timer', timestamp => cb(null, timestamp));
//     socket.emit('subscribeToTimer', 1000);
// } 
export { login,sendMessage,subscribeToMessage }