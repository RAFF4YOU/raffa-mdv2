import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `γ πβ¦Ώπ§ πππ§ππ γ`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

await conn.reply(m.chat, info, m, { quoted: fgif, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})

}
handler.customPrefix = /^(bot|bot?)$/i
handler.command = new RegExp

export default handler
 fgif, contextInfo: { externalAdReply: { showAdAttribution: true, title: botdate, body: bottime, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})

}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler