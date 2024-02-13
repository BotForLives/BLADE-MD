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
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ExNVc3N3B6UlZucnpaTXAwYUFIbXNTaWR0dHFnL1dSVVBiUlBNeGwzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWVRd1VTN2pXSnlpUmgwa21hS01GSHk5VENrcm1oL0kwellXaDM3NVpEZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRjA4N2JZV09taExFWTYvYnZBQklPaHVqL281RXk3aTBsUXcyVWNEYm5rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QnVkTEx4cmt3YzU5aG1qV0wrL3BTMGN2S0YwMUl5TEd1WDlwUHYvL21rPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNTEFWN25jWFRPdGp1eThVWHl4REpkZFI1STNidWE1U0FOYmdBaGQ4bjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imlscis3dysycmV5M0xHdk4rdnVBb1BrM0Y2RnByMmVzeFZ5Ly9DMEoxUkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsbUExRzd1U3BSVU9tNXdncks5c2p4bzlhZHpEaEkvejVoNDBxZkRoM3ZYZkd3RUJHU2hjMGdqSUdZeUNLTlg2VTZqdk0vSTlWdUxCMEdwankwUURpUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjcwLCJhZHZTZWNyZXRLZXkiOiI1RzRHQmtqbHI3UnlFYm1XNnJCTEttcS9IUWU5R2JyZXM0cmVDZ1lnL3lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg2OTU5RTJGQ0JCQzFBMjgzODVGRUZDNjBCNzFENTk0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc4MzkxNDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjY1NTcyODg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZBRDNBOTE4MkMzQjgwMUM5ODM2REQ0M0FDMTc2NzY4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDc4MzkxNDJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImF5ZVJGNnZjUnNXY0tEbHBXRWhJc0EiLCJwaG9uZUlkIjoiOWJlYTcxYTEtOGY4Yi00N2VlLWJmMmYtZWM5Yjc3NWIwNDliIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBMZGtkblJNekJVa0J6S25sbzI4NTQzTVRuRT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGJKcXdXQ0EzSEhQdVVUeHlZaFVGSFlJVVY0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT21Zd29ZRUVKNmRycTRHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNnRxLzh0OVk2ZlU1ZFpiN3BLOTB6UFFLRHcvWTVQZndVaVhiWThsZDlnbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZmhOVng5Wnp5bjh4ZkpzanEyM3Z4MXMrUFlwZlN2QjhjL1BPMXJubjRub3VxcTN2NUJKaXNqTXJPd1FuZ0RJUjVaVityWjF3SnZqa29rV1NyK2pMQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InBlOHdqVVk1c21WRW5iY3dqbWgzNHUvckdnRXF5NzVLdlU2czkyRG1rN0pmZmhtZFdzZ3ZVQlVGK1psTU45elhoLzI3dFpvVi9odng4NzZWbk9wMGdnPT0ifSwibWUiOnsiaWQiOiIyNzY2NTU3Mjg4NjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkF2ZSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY2NTU3Mjg4NjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVyYXYvTGZXT24xT1hXVys2U3ZkTXowQ2c4UDJPVDM4RklsMjJQSlhmWUsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDc4MzkxMzgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTDlWIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
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
 
