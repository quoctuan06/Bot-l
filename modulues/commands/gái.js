module.exports.config = {
	name: "gái",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh gái",
	commandCategory: "Random-img",
	usages: "gái",
	cooldowns: 3
};
module.exports.run = async({
  api, event,
})=> {
  let attachment = [];
let length = [2,4,6];

  for (let i = 0; i < length[Math.random()*length.length<<0]; i++)attachment.push((await require('axios').get((await require('axios').get('https://nguyenmanh.name.vn/api/world/vietnam')).data.url, {
    responseType: 'stream',
  })).data);
  api.sendMessage({
    body: ``,
    attachment,
  }, event.threadID);
};