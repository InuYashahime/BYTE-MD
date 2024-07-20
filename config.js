
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtkdlhodXBueTJmTHd2RmQ1TnI5b0w0M1BOT3RlQWNvclNwUm5pbWhXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVVVbnZybHJTSXNVeTRzb2h5Y2NRVzQzT2pmMTNzaEdRUHZGTTNqSWVScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RXRDYWZ4ek16eHMrN1I2eWJHWFIwRHlOOGViZkt0L1NJZ1RkeHB4MTJNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cFhKVW5sTVBNSlFOOFFBbUoxYWhVcGtiZEJSYVkvd1RrRWFaQUMyUkdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LekxBSGdvSEo0bjVhc0tWdm5IWVlaM3BaR21vV0I0QU9pZEx3V2FhWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzQkl0UzYvSnluWDU0Y01RQkVKODZjMlJXWWxMRlUrQjBSYVFKVzduWHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhMNDVEdEIvTkRIaHZNQ3pBRmcrdElZMnpHQWFkVCt6N2EvSnBnUk1Gbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnd1dGVPOTdCYkVBc0R3clQ0UW1Tdk1qdTJCMXMvQ2FUMWlvN29HVnJEZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM5UGZhTTJSanJEVWpsVWVOZ2ZuUW5DQzVQM21CcS9Uci9RRit1TURNWWhUK3lrd0VVb0RiU1VnY3VYQ2dpL3NsUkIxb09BVEpyL0IvRVVFTG1RQ2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJHYUVHTUZ0WkM5NlRESklPK1VjMXhCMEJhSVU1bzJ1Yml2MWV3b0tTT3prPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk5NDQwNzI1NDEzNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDMENCMDlCNDM5RDEwNjlGQjYxMEI5NUUzMkNENURCNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNDc0OTIwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5OTQ0MDcyNTQxMzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREI4NTczRUJENUI2QjE2ODI5QjhEM0EyNEFCNDQ0MzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTQ3NDkyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMGRDTVNXTnZSLUtnU1FYT3dTcmpoUSIsInBob25lSWQiOiIzNzUyOGI1Mi0wYmNlLTRjZjQtYTRiNy0wMGRlMDJjZDk0NDEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHkwOGJudjJkbG1DblZxdlBpSUo5VnhMS200PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing0MzN3cDBKK3FKbnByQnpQY0EzbDRUaDZHRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJZVkRLODE4SiIsIm1lIjp7ImlkIjoiOTk0NDA3MjU0MTM0OjEzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCTiobinqXig5/inJjwnZG68J2Rr/CdkajwnZGr8J2RtvCdkb7wlqSN8JOKhyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS09aemFJR0VObSs3clFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVjIwejVYYmYwc25hUXZpWGg0cWVxQzREbWQ3cmNMczJmcnpXQW1YWVMydz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibXg5RnZHTVVBaWd5Q1JvcWFsY3dYZTY3SEc4RlF0VHp1bVR4MlBwSFpqZlBmYzZzbFhzZDBXZy92TklnNXV1WVNkcHlRd3NIako3aDJ3WGtydG9qQWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZGMUc2Yk50bVBua0dPZG5vbGRwaStPTEI1OXRXcTlHYlU4SUNCdmJTalRoK0xrbmNFQVVRSUlDWVczRVFRZ0J1b0doL1dPU0FydGxDT3B2UnBCYmdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTk0NDA3MjU0MTM0OjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZkdE0rVjIzOUxKMmtMNGw0ZUtucWd1QTVuZTYzQzdObjY4MWdKbDJFdHMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE0NzQ5MTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTUorIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
