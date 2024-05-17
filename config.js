const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '27767494368'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'nyamakaziave@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Johanesburg South Africa'
global.gurl = 'https://instagram.com/_madeby_ave/' // add your username
global.sudo = process.env.SUDO || "27767494368"
global.devs = '27767494368'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+27767494368
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5nbloxV08wdUtLN3FNWTdYOTQ3aHk3YUhjWHlhWnN6VXh2MUdKWDgxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXVnYlpUNC9namppeTdLejJ1VGdXREF5NElua1FoNzRPQTlubGV6TDRHST0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTFJWdVdTZ21UTVhGYXk1UXJRVTB5VFh5YjlXcmxoR0JLQk90cit2TlZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYWx1T2dGK3lmbmlGd3IvZTk2T3d2bDRtNUhjY0RPVDBKQk4vaVMxOTJBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHSXFHUTRTZDFhRmJpRjJFcnBJMXdKL1dlWk8vRCt6ZUFpd3JzL0wwWDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM0K0xuSEs3RXhYVVA4Sjl4R0J1RWtLK3RDZENsNWZKYzJicEM4MnZZQUk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSU9td3lpNHNFN2l0SDVzOVduNDA5SWZSYThja1Ird0JuTDBXbWVwSDZYR0dlY0tUWldBNXREelZBVzZQYnp4RnlmWEF1VzVPVExnNDhweHp2R0ZCQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI3LCJhZHZTZWNyZXRLZXkiOiJZaGlsRHBaN1RtVlBNbGc4SlFNWDBmTDlCVTY4bUE2RFN0YmdKRVpSNTUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1M0hfdjlheFRZT2NQTHNOWENBTmFnIiwicGhvbmVJZCI6ImUzZTJiZmY0LWEwNGMtNDFjMi05MWYzLTZlNmMxMjU4ZTBmMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcDlFelBhZ3dVcXdHN3NPc1F2cGtyM0xBUEk9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNhSXorVHFGdGgweDZ6anFvRzE4MW1wSWdZWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09HZDFJY0hFT09ibnJJR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJxYzBvWm51ZEpweGY2VEtGNjA5T3F5ckdydzRjd3oyVFFEU1lCc3lMZ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik0vNmtKc2R0RHRzYVE0Y25rNGU2WFRNSmpCOGt1RWZrV09SYzByUW5oUWRtWEF5d1RvZG9TYzhBdk5wdE56ZGQwbzJ4YitiMUlEZjdzZmE4eHZJQUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGOUxzTmZmNzJwUE9nY0tNRGR5MUFoS0dLcTdaYkdvRmhCaVdWSUc0YjE2K1VFWCs0Wk1BQnIwcFI5Zi8xbnJCWXBUd29hRElvY203Y0YzalNUQzlEdz09In0sIm1lIjp7ImlkIjoiMjc2NjU1NzI4ODY6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXZlIEJvdCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY2NTU3Mjg4NjoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkcW5OS0daN25TYWNYK2t5aGV0UFRxc3F4cThPSE1NOWswQTBtQWJNaTRKIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1OTY1NDE1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxPYiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY AVE',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '•Ave•' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'im alive and well now my bru' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴅᴇ-²²¹-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
