var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MjE4MjU2MDM5MjIzNDkyNjA4.CqAnzg.2A7fdjqkHfk9sHK_lkS6QFZz08c'
  });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Connected as: ' + client.User.username);
  });

  client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
    if (e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG');
    }
  });
