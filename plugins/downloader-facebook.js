import fetch from 'node-fetch'
import getFBInfo from 'fb-downloader'
import { aiovideodl, savefrom } from '@bochilteam/scraper'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Usage : ${usedPrefix + command} fb_url_video*\n\nExample :\n${usedPrefix + command} https://web.facebook.com/watch/?v=892725951575913`
	if (!(text.includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
	try {
		let anu = await fetch(`https://api.akuari.my.id/downloader/fbdl?link=${text}`)
		let json = await anu.json()
		await conn.sendFile(m.chat, json.url.url, 'fblow.mp4', `_${json.url.subname} Quality--- :_\n${json.info.title}\nDuration : ${json.info.duration}`, m)
	} catch (e) {
		console.log(e)
		m.reply(`Invalid facebook url / group di private.`)
	}
}

handler.help = ['fb <url>']
handler.tags = ['download']
handler.command = /^(fb(dl)?)$/i

handler.limit = true

export default handler