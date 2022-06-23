const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  let uname = conn.getName(m.sender)
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n*${usedPrefix}daftar ${namalu}.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 90) throw 'Umur jangan terlalu tua'
  if (age < 3) throw 'Masih bayi ko bisa ngetik jir ._.'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  user.serial = sn
  
  m.reply(`
━━ 「 *Successful Registration* 」━━
❍ Terimakasih anda sudah terdaftar
❍ *SN* digunakan untuk daftar ulang
❍ mau unreg? ketik ${usedPrefix}unreg <sn>
╭─────────────────╮
├👤 Nama : ${name}
├🌟 Umur : ${age} tahun
├🎫 SN: ${sn}
╰─────────────────╯
_*Note*_ :
- kalo lupa sn ketik ${usedPrefix}ceksn
`.trim())
u = '━━ 「 *HELLO NEW PREN* 」━━\n\n❍ Harap baca rules dan patuhi ya kak \n❍ Click *Menu* untuk melihat semua fitur\n❍ Mau sewabot? atau report bug? klick "Owner"'
await conn.send3But(m.chat, u, 'klik salah satu tombol dibawah', 'Rules', '#snk', 'Menu', '#menu', 'Owner', '#owner',  m)
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
