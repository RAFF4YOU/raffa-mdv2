let handler = async (m, { 
conn 
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastrob)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.health < 10) return m.reply('health anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#health')
    if (user.lastrob > 60000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk rob')

let rndm1 = `${Math.floor(Math.random() * 10)}`
let rndm2 = `${Math.floor(Math.random() * 10)}`
.trim()
 

let ran1 = (rndm1 * 1000)
let ran2 = (rndm2 * 10) 

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`

let jln = `
ποΈ          π

βοΈ Mengincar target....
`

let jln2 = `
ποΈ     πΆ

β Memulai aksi....
`

let jln3 = `
ποΈ

β Merampok....
`

let jln4 = `
         π
         
         
         
ποΈ

β πΉBerhasil kabur....
`

let hsl = `
*β[ Hasil rob ]β*

 β πΉ Uang = [ ${hmsil1} ]
 β β¨ Exp = [ ${hmsil2} ] 		 
 β π¦ Rob Selesai = +1

Dan health anda berkurang -10
`
user.money += ran1
user.exp += ran2
user.stamina -= 20
	
setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${jln4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${jln3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${jln2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${jln}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply(`πMencari Rumah.....`)
                     }, 0) 
  user.lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['rpg']
handler.command = /^(rob|robery)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}