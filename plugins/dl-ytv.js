
import fs from 'fs';
import os from 'os';
import fetch from 'node-fetch';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  let chat = global.db.data.chats[m.chat];
  if (!args || !args[0]) throw `✳️ Example:\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ Verify that the YouTube link`;
  
  var gapi = `${gurubot}/v1/ytmp4?url=${encodeURIComponent(args)}`

  var ggapi = `${gurubot}/ytplay?url=${encodeURIComponent(args)}`

  const response = await fetch(ggapi);
  if (!response.ok) {
      console.log('Error searching for song:', response.statusText);
      throw 'Error searching for song';
  }
  const data = await response.json();

  const caption = `💝💝 Y O U T U B E 💝💝
	  
  💝 Title: ${data.result.title}
  💝 Channel: ${data.result.channel}
  💝 Duration: ${data.result.seconds} seconds
  💝 Views: ${data.result.view}
  💝 Upload: ${data.result.publicDate}
  💝 Link: ${args[0]}
  
  ⊱─━⊱༻💝💝💝💝༺⊰━─⊰`


  let vid = await fetch(gapi)
  const vidBuffer = await vid.buffer();

  conn.sendFile(
    m.chat,
    vidBuffer,
    `error.mp4`,
    caption,
    m,
    false,
    { asDocument: chat.useDocument }
  );
     
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['downloader'];
handler.command = ['ytmp4', 'video', 'ytv'];
handler.diamond = false;

export default handler;

