(async () => {
  process.chdir(__dirname)
  const Discord = require('discord.js')
  const client = new Discord.Client()
  const config = require('./config.json')
  const sqlite = require('sqlite')
  const db = await sqlite.open('./database.sqlite')

  client.on('ready', () => {
    console.log('I am ready!')
  })

  client.on('message', message => {
    if (message.author.bot) return
    if (message.content.toLowerCase() === 'ping') message.channel.send('Pong!')
  })

  client.login(config.token)
})()
