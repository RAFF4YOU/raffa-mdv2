let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
❏───⭓「 𝐑𝐔𝐋𝐄𝐒 」
│️‍• 𝙹𝚊𝚗𝚐𝚊𝚗 𝙷𝚒𝚗𝚊 𝙱𝚘𝚝/𝙾𝚠𝚗𝚎𝚛
│️‍• 𝙹𝚊𝚗𝚐𝚊𝚗 𝚃𝚎𝚕𝚙 𝙱𝚘𝚝/𝙾𝚠𝚗𝚎𝚛
│️‍• 𝙹𝚊𝚗𝚐𝚊𝚗 𝙺𝚒𝚛𝚒𝚖 𝚅𝚒𝚛𝚝𝚎𝚡 𝙺𝚎 𝙱𝚘𝚝
│️‍• 𝙹𝚊𝚗𝚐𝚊𝚗 𝙲𝚞𝚕𝚒𝚔 𝙱𝚘𝚝
│️‍• 𝙹𝚊𝚗𝚐𝚊𝚗 𝚂𝚙𝚊𝚖 𝙱𝚘𝚝 𝙼𝚒𝚗𝚒𝚖𝚊𝚕 │️‍𝙳𝚎𝚕𝚊𝚢 5 𝙳𝚎𝚝𝚒𝚔
│️‍🗣️𝙱𝚊𝚗𝚐 𝙱𝚘𝚝𝚗𝚢𝚊 𝙶𝚊 𝚁𝚎𝚜𝚙𝚘𝚗𝚍 : │️‍𝙹𝚊𝚗𝚐𝚊𝚗 𝙳𝚒 𝙿𝚊𝚔𝚜𝚊 𝚂𝚒𝚊𝚙𝚊 𝚃𝚊𝚞 │️‍𝙱𝚘𝚝 𝙽𝚢𝚊 𝙻𝚊𝚐𝚒 𝙴𝚛𝚛𝚘𝚛
❏────────────⭓

❏────⭓「 𝐒𝐍𝐊 」
│️‍️1.Data WhatsApp Anda Akan │️‍Kami Simpan Di Server Kami │️‍Selama Bot Aktif.
│️‍
│️‍️‍2.Data Anda Akan Di Hapus │️‍Ketika Bot Mati.
│️‍
│️‍3.Kami Tidak Menyimpan │️‍Gambar,Video,File,Audio,Dan │️‍Dokumen Yang Anda Kirim.
│️‍
│️‍4.Jika Anda Menemukan *BUG/│️‍ERROR* Silahkan Langsung │️‍Lapor  Ke *Owner!*
❏───────────────⭓

❏───⭓「 𝐇𝐔𝐊𝐔𝐌𝐀𝐍 」
│️‍1. 𝙱𝚕𝚘𝚔 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝
│️‍2. 𝙱𝚊𝚗 𝚂𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊
│️‍3. 𝙱𝚕𝚘𝚔 𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 & 𝙱𝚊𝚗 │️‍𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝
│️‍4. 𝙱𝚕𝚘𝚔 𝙿𝚎𝚛𝚖𝚎𝚗𝚝
│️‍5. 𝙱𝚊𝚗 𝚂𝚎𝚖𝚎𝚗𝚝𝚊𝚛𝚊
❏────────⭓
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '✨ Saweria', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: logo + 'Rules'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(snk)$/i

export default handler