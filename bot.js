const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
    let canal2;
    client.channels.array().forEach((channel) => {
        if (channel.name === 'segundo-canal') {
            canal2 = channel;
        }
    });
});

client.on('message',(message) => {
    if (message.content.includes('cloreto') && !message.author.bot) {
        message.channel.send("É, você realmente deveria atualizar o cloreto.");
    }
});

client.login(token);