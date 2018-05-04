const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message',(message) => {
    if (message.content == "!ping")
        console.log("Pong!");
    else {
        console.log('Não entendi, não');
    }
});

client.login(config.token);