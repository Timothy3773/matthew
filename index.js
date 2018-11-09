// Matthew: Automated Server Bot
var Commando = require('discord.js-commando')
var path = require('path')
var clientInfo = require('./clientinfo.json')
var newMsg = '0'; var oof = 1

let client = new Commando.CommandoClient({
  disableEveryone: true,
  owner: '203587309843513344',
  commandPrefix: 'm/'
})

client.registry.registerDefaults()
client.registry.registerCommandsIn(path.join(__dirname, 'commands'))

client.on('ready', () => {
  console.log('Bot Rebooted')
})

client.on('message', msg => {
  if (msg.author.bot) return
  if (!newMsg) {
    newMsg = msg.content
    if (!msg.channel.topic) {
      msg.channel.setTopic(newMsg)
    }
    console.log(msg.content)
  } else {
    if (parseInt(msg.content) !== (parseInt(msg.channel.topic) + 1)) {
      return msg.delete() && msg.author.send('Please count up by 1.')
    } else {
      console.log(msg.content)
      oof++
      msg.channel.setTopic(oof - 1)
      newMsg = msg.content
    }
  }
})

client.login(clientInfo.token)
