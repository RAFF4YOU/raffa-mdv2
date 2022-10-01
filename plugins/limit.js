import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let thumbnail = fs.readFileSync('./thumbnail.jpg')
    let ke1 = global.db.data.users[who].limit
    let ke2 = global.db.data.users[who].exp
    let ke3 = global.db.data.users[who].money
    
    conn.sendButton(m.chat, `*「 Sisa Limit/Money  @${who.split("@")[0]} 」*
❏––––––––––––––––––––·•
┊🌌 Limit : ${ke1}
┊✨ Exp : ${ke2}
┊💵 Money : ${ke3}
•·–––––––––––––––––––––·•
┊Kamu dapat membeli limit dengan 
┊#buy limit *jumlah* 
•·–––––––––––––––––––––·•
┊ *Example :*
┊#buy limit 1
•·–––––––––––––––––––––·•
┊ *Note :*
┊• Harga 1 limit = $2500 Money 
❏–––––––––––––––––––––·•

kamu Kek Kontol`, author, logo, [
        ['Beli', '.buy'],
        ['Menu', `${usedPrefix}menu`]
    ], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
export default handler