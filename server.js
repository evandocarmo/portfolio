const io = require('socket.io')();
const port = 8000;
const notifier = require('mail-notifier');

const imap = {
    user: "carmo.evan",
    password: "MBRjul2016!!",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true, // use secure connection
    tlsOptions: {
        rejectUnauthorized: false
    }
};
const n = notifier(imap);
n.on('end', () => n.start()) // session closed
    .on('mail', mail => console.log(mail.from[0].address, mail.subject))
    .start();

io.listen(port);
io.on('connection', (client) => {
    let messageList = [];

    client.on('user-message', (message) => {
        messageList.push(message);
    });

    client.on('admin-message', (message) => {
        messageList.push(message);
        client.emit('admin-message', message);
    });
});

console.log('listen...');