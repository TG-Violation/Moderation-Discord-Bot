var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODE0NTg0MzY5MzY0NTk4Nzk1.YDf-zw.3tAwdvnCPZrZHqkgDWJc6Q1Zows",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "TG Violation Coded This",
  type: "PLAYING:2k21 Bussin yall ass",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "!",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


