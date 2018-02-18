const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hey jake, what was your merch link again?') {
    	message.reply('fanjoy.co/jakepaul, next time remember it you stupid cunt nugget bitch ass fuck');
  	}
client.on('message', message => {
    if (message.content === 'Its Everyday Bro sucks') {
    	message.reply('Well guess what, your life sucks too, BITCH http://bit.ly/2Hs3Ehe');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
