const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0643466522";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_47_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNSxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc0LFxuICAgICAgICA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDY1LFxuICAgICAgICA3MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwditVSWVqTUEwMVZyS3kzN3NjYTJQbnB6UGdUakFKQnQ4RWxVSXkvQVFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlLVBHM1d5cVJKeTNUcnlYVGZsdVJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFkNWQ1MmU4LTkyMTQtNDg3YS1hNDJiLTA5ZDcyNDUzZDIwMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAzNyxcbiAgICAgIDIzMCxcbiAgICAgIDEyNSxcbiAgICAgIDI1MixcbiAgICAgIDIzNCxcbiAgICAgIDE0NSxcbiAgICAgIDEzOSxcbiAgICAgIDg2LFxuICAgICAgMTgsXG4gICAgICA1NyxcbiAgICAgIDEwNSxcbiAgICAgIDQzLFxuICAgICAgNzIsXG4gICAgICA4LFxuICAgICAgMjE0LFxuICAgICAgOTMsXG4gICAgICAyNTEsXG4gICAgICAxNCxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAxLFxuICAgICAgMTI5LFxuICAgICAgMjIwLFxuICAgICAgMjA0LFxuICAgICAgNjYsXG4gICAgICAxODAsXG4gICAgICA5LFxuICAgICAgNjMsXG4gICAgICAzOCxcbiAgICAgIDIwNSxcbiAgICAgIDIwMSxcbiAgICAgIDExMixcbiAgICAgIDI0OSxcbiAgICAgIDE1MixcbiAgICAgIDI1MixcbiAgICAgIDIxOSxcbiAgICAgIDg5LFxuICAgICAgMzEsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZN1ozMVdTQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2NDM0NjY1MjI6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4NjA3OTk3ODk4ODMxOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mZmdwZ0RFTUtYNmJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWVI5dlJ4MUlQMlFrWmJRVi8xcDJ4Y1BJbUt4bTZia0NESXR1NFJPd1FVYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBMmIzZ1FnVE5UUWF3c0lMczB5UmZuc0VPZWFvWHVEZ3BJTUtURTNjNVN0bzNiNHd4a0d5Mno0aCtaZGlCT1JSbDdoSGQ2cGU5bDRWRDV3MlZCM1FDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjWVp6V0VIZUFlN0pxTXVqcXJPQ0JCQ2h3WkM0YnlSYzZQc0VwUk0xVG9vOVppcXcvTnlrQlZselVMY3pRaEhqdGFTdTlBZ3U3NSs4WVp1MEROeXZCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzY0MzQ2NjUyMjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTI5MDgyMVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ":",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
