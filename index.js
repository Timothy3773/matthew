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

  client.on('message', async message => {
    if (message.author.bot) return
    if (message.channel.name !== config.countChannelName) return
    if (message.content.toLowerCase() === 'ping') return message.channel.send('Pong!')
    await db.run('CREATE TABLE IF NOT EXISTS userCount (userID INTEGER PRIMARY KEY, count INTEGER)')
    // var userCount = await db.run('SELECT userID, count FROM userCount')
  })

  client.login(config.token)
})()
