const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '27767494368'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'maxdavid126@gmail.com'
global.github = 'https://github.com/Bladeh4x/BLADE-MD'
global.location = 'Lahore pakistan'
global.gurl = 'https://instagram.com/_madeby_ave/' // add your username
global.sudo = process.env.SUDO || "2348059540212"
global.devs = '2348059540212'
global.website = 'https://github.com/Bladeh4x/BLADE-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "BLADE-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01pNDlkMndtaTFPZUVxWU5VTkwwd2NXaDVaK1N2MHdpK1pSaHEweFRuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5yb052eWhTczhkUlVXR1NQbkZPdHdJTmkzeStwT0FRYlNkNnozdXZoND0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SmxLWnpvQ3l0bi9SbG8za0xZNWNqYXZTeDhOR1Vrb3c2Z296WTFHYzFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvUXBra1k5a01YTERjWmMrcmZJSWphdXpQWmxUVWpFaXFKSFMwUzJpUXg0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJdm1ObkhwZnM4QVZyWUVlMU5DNzNYMC9qWkl2K0RzNXJlSWpyMGhTVk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkkyN0E4ZVFacS9nVlFJNGtRclZCSUQ3OE5jTzRUU2l4K014N1VMSm5SeUk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSVNZY1dZRVJpUFU0bWV6bVhoSXhVendIV3AvM29NRGk1QlZZNW55VjlXMndSOWd5R1p3aE1tWEI5UjZ0cnJCdjBzTE5BTzVZNE5rbVhWRWE0T2JEZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjMyLCJhZHZTZWNyZXRLZXkiOiJzYktsM2hDWEpITThZbmpwYm41RGFBdjlqanNjekdhQlBTSzJITG9jNXhvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVbXhmaGF6elFoNkJWSlRvNF9oc2F3IiwicGhvbmVJZCI6IjM1NjIzNDZjLWZiOGEtNDk0ZC1hNzM3LTViNDdkYzBhOWU3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDVHVCSm5WbVBHR1pLQkNaTzRYZy9uV1BRVUU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InR2MzM1Q1BiRnE4YTRUNERWL0tQdHpROGxtTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BLUmlaY0dFSWEvdTZzR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMGJlOE50SXVzVlQxTHJEdFZCZjVLRWZhRkxIbjlaZFJDQkJyVjl0ZXBVbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOHN6cWl0d3d3eWgycjRoMWh1Y3JnS1pSZTdiUTJpeFFkeFQySU1ubnBrUDBBbmoxdTVnKzFtN0E2SW0vN3RqR0tIRkFsVjZQRDhLand0U3dQdmlOQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InpXV0FxMUNmeWRRZmFSWW8wbCtsMzZKNnVSMXRQSUhMWlBiaUxGc01McnNTWGxQZlF6R0RGQXVvNGNHY0tMV0dZY1N1TWhjR0w4TFBXNisrRithQUF3PT0ifSwibWUiOnsiaWQiOiIyNzc2NzQ5NDM2ODo5NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIuIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzY3NDk0MzY4Ojk0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRHM3ZEYlNMckZVOVM2dzdWUVgrU2hIMmhTeDUvV1hVUWdRYTFmYlhxVksifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDE3NjUwMDEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVNmIn0=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'BLADE BOT',
  packname:  process.env.PACK_NAME || 'MADE BY ALEX DAVID',
  
  botname:   process.env.BOT_NAME === undefined ? "BLADE-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '•AvePlayz•' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? true : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
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
 
