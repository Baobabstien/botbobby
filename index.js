const Discord  = require('discord.js');
const client = new Discord.Client();

client.login("NTcwMzIwMDg2NDc3NDM5MDEx.XL9eeg.XFCquCQ8w_-Cdf6BV4ZD6cCGtNs");

client.on('guildMemberAdd' , member =>{
    member.guild.channels.get('304944083653361664').send('Bienvenue Muchacho! ' + member.user + 'Ravi de faire ta rencontre! :beer: ');
    console.log('+1')
})
