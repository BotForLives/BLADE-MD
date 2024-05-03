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
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNZbUMvWHVGbVh6WTJ5Tmg4SmlZL3pKY0daTStqWWFMdWxhVnBnQi8yOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmVsdWxwWkNqSWVYZWFYLzlScWlQRFd3dU10dXB0OHpOMHU2NVFEWllFYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzSHE2VEFRclJoTVhYZ21TeEhDeU5Ua0V4cy94SklJMHduWjY2K3dqK2s0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZMWs3QnNmNklXVGc1Z2xIeDErUWdubFZNRUFPWndaQU5zQS8ybkl1QzFjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEeVZwN0VLUmFTWk9EdGpjQkt1TmtPVk9LNlZFWEQ5cFUrcllmbXRhMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndDbzc0cFVIbjBtdUY3OU5BUDhzQjV2akVNYTVZQ1dLTXRyWlNHVnl2ams9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSzJGQjdUNlNOYkxXVG5EOWUwdENlWWtvaW93cnJSZEpoWUd1cmdHbjFhV3EycGtQRUU0Wk1TQ2NweWlZQ1Q3UzI5VnNMdmVKS204OVBRQmsxSERCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjM4LCJhZHZTZWNyZXRLZXkiOiIyTTlSaFhLdS9zVG1tZ2pvK0xqa3JNMlpMTk9yT2J6dTNrbVdwWEtqOXVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzMXlOMGZrYVM4QzBLU0VPR2diOUJBIiwicGhvbmVJZCI6IjhmMTYyODI3LTdiZjMtNDJjZS1hYjY4LTgwNzhkNDAxY2Y4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvWmxzVXkzWm1GcEVMaFJkV1MzeXp2Z0hsS0U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InI3aVkwcTVqeVJZbG5KckY0WE1WSHZ4MTNxRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rZDFJY0hFUHVvMUxFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJxYzBvWm51ZEpweGY2VEtGNjA5T3F5ckdydzRjd3oyVFFEU1lCc3lMZ2s9IiwiYWNjb3VudFNpZ25hdHVyZSI6InVJMU9ucHNGdkNST2ptY0lMRTRYYVNPOVBXMTdrcHV2L1NjNCsydVRuZlV6dk1oYmpiWG9zYVRyUkhuZXFsQXZOYkFKY01jcDNHakM0V01ucmk1akRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDcjFrT2VET01aRXF5MUxZem5HS2YwWUZYM0lIaW4vU2hWVHYyOUV5cmNpTkUxRS9aTTBxNXNMeGNLRWkxWWI4NUM4T3NjR1JCYzVMTWgwUkVkSGtDQT09In0sIm1lIjp7ImlkIjoiMjc2NjU1NzI4ODY6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBdmUgQm90In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NjY1NTcyODg2OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHFuTktHWjduU2FjWCtreWhldFBUcXNxeHE4T0hNTTlrMEEwbUFiTWk0SiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNDc1NDY4OH0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY AVE',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '•Ave•' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
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
 
