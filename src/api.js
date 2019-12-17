import openSocket from 'socket.io-client';
const socket = openSocket('https://dreamy-morse-d6a526.netlify.com:8000');

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