const io = require('socket.io')();


var users = []

io.on('connection', (client) => {
    var currentUser = null
    // client.on('subscribeToTimer', (interval) => {
    //     console.log('client is subscribing to timer with interval ', interval);
    //     setInterval(() => {
    //         client.emit('timer', new Date());
    //     }, interval);
    // });
    client.on('login',(user)=>{
        users[user] = client
        currentUser = user
    })
    client.on('message',(message)=>{
        Object.keys(users).forEach((key) => {
            users[key].emit('message',{
                user:currentUser,
                message:message
            })
        })
    })
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port); 