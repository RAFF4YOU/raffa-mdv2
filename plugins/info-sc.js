const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
*––––––『 SOURCE CODE 』––––––*
𝐀𝐈𝐍𝐔𝐋 - 𝐁𝐎𝐓

𝐆𝐈𝐓𝐇𝐔𝐁:
https://github.com/AinulBotz
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya1)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'subscribe banh!',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GITHUB',
               url: 'https://github.com/AinulBotz'
             }

           },
                {
               urlButton: {
               displayText: 'Instagram ',
               url: 'https://instagram.com/ainul_181'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Rules',
               id: '.rules',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi',
               id: '.donasi',
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
handler.command = /^(sc|script|sourcecode)$/i
handler.help = ['script']
module.exports = handler