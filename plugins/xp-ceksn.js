const { createHash } = require('crypto')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`🤖 Note: Simpan *SN* dengan baik ya kak
*📮 SN:* ${sn}`)
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
module.exports = handler
