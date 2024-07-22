module.exports.config = {
  name: "noprefixgai",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "trung",
  description: "",
  commandCategory: "no prefix",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("vdgai")==0 || (event.body.indexOf("$")==0) || event.body.indexOf("Gai")==0 ||
event.body.indexOf("gai")==0 ||
event.body.indexOf("Gái")==0 ||
event.body.indexOf("gái")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

     api.sendMessage("😍| Ramdom Video Gái:\n\nVideo sẽ được gửi sau vài phút/giây.", event.threadID, event.messageID);

    var link = [
      "https://files.catbox.moe/urove4.mp4"
          ];
     var callback = () => api.sendMessage({body:`=== 𝐕𝐃𝐆𝐀𝐈 ====\n━━━━━━━━━━━━━━━━━━\n➝ 𝐂𝐡𝐮́𝐜 𝐂𝐚́𝐜 𝐁𝐚̣𝐧 𝐗𝐞𝐦 𝐕𝐢𝐝𝐞𝐨 𝐕𝐮𝐢 𝐕𝐞̉`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
}
                                                                                                         }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };