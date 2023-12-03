import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['94726962984', 'Ashen', true],
  ['94726962984', 'Ashen', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['94726962984','32460248586'] 
global.prems = ['94726962984', '32460248586', '94726962984']
global.allowed = ['94726962984', '94726962984', '19152999993']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'ᴛʜᴇ ᴀʟᴇxᴀ-ʙᴏᴛ'
global.premium = 'true'
global.packname = '💝𝗔𝗟𝗘𝗫𝗔|ᴮᴼᵀ💝' 
global.author = '@Asliguru' 
global.menuvid = 'https://telegra.ph/file/d119314a6e5556b0839ee.mp4'
global.igfg = '💝 Follow on Instagram\nhttps://www.instagram.com/asli_alexa\n' 
global.dygp = 'https://chat.whatsapp.com/C4mcek6i7aE2P1iDcJpmoo'
global.fgsc = 'https://github.com/ashenbro134/Queen-Mini-BOT' 
global.fgyt = 'https://youtube.com/@brainsnaps'
global.fgpyp = 'https://youtube.com/@brainsnaps'
global.fglog = 'https://raw.githubusercontent.com/ashenbro134/Queen-Alexa-MD/blob/main/src/mp3/alive.mp3' 
global.thumb = fs.readFileSync('./Assets/Alexalogo.jpg')


global.wait = '*⌛ _Loding..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
