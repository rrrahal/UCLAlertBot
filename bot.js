const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
var CronJob = require('cron').CronJob;

client.on('ready', () => {
    memeMondayJob();
    tutorialWednesdayJob();
    cloretoJob();
});

client.on('message',(message) => {
    if (message.content.toLocaleLowerCase().includes('cloreto') && !message.author.bot) {
        message.channel.send("É, você realmente deveria atualizar o cloreto.");
    }
});

function memeMondayJob() {
    let channel2 = client.channels.get('442051539927040002');
    var job = new CronJob({
    cronTime: '00 00 18 * * 1',
    onTick: function() {
      channel2.send("Oi gente, não se esqueçam que hoje é dia de #MemeMonday!");
    },
    start: false,
    timeZone: "America/Sao_Paulo"
  });
  job.start();
}

function tutorialWednesdayJob() {
    let channel2 = client.channels.get('442051539927040002');
    var job = new CronJob({
    cronTime: '00 00 18 * * 3',
    onTick: function() {
      channel2.send("Oi gente, não se esqueçam que hoje é dia de #TutorialWednesday!");
    },
    start: false,
    timeZone: "America/Sao_Paulo"
  });
  job.start();

}

function cloretoJob() {
    let channel1 = client.channels.get('442046971235139586');
    var job = new CronJob({
    cronTime: '00 30 18 * * 0-6',
    onTick: function() {
      channel2.send("Fez alguma coisa pelo grupo recentemente? Alimente o Cloreto!");
      channel2.send("https://gitlab.com/uspcodelab/kanban");
    },
    start: false,
    timeZone: "America/Sao_Paulo"
  });
  job.start();

}


client.login(token);