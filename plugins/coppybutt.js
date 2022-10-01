let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
const bLink = [
{index: 1, urlButton: {displayText: two, url: 'https://www.whatsapp.com/otp/copy/https://chat.whatsapp.com/'}},
]
await conn.sendMessage(m.chat, { text: one, templateButtons: bLink, footer: wm })
}
handler.help = ['copybutton <command> <teks>']
handler.tags = ['tools'] 
handler.command = /^copybutton$/i
export default handler