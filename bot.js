const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hey jake, what was your merch link again?') {
    	message.channel.sendMessage('fanjoy.co/jakepaul, next time remember it you stupid cunt nugget bitch ass fuck');
    
    else if (message.content === 'Its Everyday Bro sucks') {
        message.channel.sendMessage('well guess what, your Life sucks too BITCH');
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
