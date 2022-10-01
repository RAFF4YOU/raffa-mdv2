const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let name = await conn.getName(who)
let handler = async (m) => {
let krizyn = `
*Hallo ${user}*

Saya Bot
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '[❗] Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: '🔮GroupBot🔮',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: '🐻Instagram creator🐻',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'PATUHI RULES BOT',
               id: '.snk',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'SOURCE CODE',
               id: '.sc',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'COMMAND',
               id: '.ainul',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(menu|help)$/i
handler.help = ['menu']
module.exports = handler