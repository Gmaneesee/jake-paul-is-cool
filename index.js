const Discord = require('discord js'');
const bot = new Discord.Client();

client.on('message', (message) => {

  if(message.content == 'what was your merch link again?') {
      message.replay('fanjoy.co/jakepaul, and remember it next time bitch');
  }

});

bot.login('JSSr3COYl3RA351abea_S6OJd05NMojJ')
