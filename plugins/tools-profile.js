let fetch = require('node-fetch')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let { name, premium, level, limit, exp, lastclaim, registered, regTime, age, money, role } = global.DATABASE.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let username = conn.getName(who)
    let math = max - xp
    let str = `

✧───────[ *PROFILE* ]───────✧
👤 • *Name:* ${username} ${registered ? '(' + name + ') ': ''}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
💻 • *Link:* https://wa.me/${who.split`@`[0]}
${registered ? '🎨 • *Age:* ' + age : ''}
🎊 • *XP:* TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `\nSiap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]

🀄 • *Level:* ${level}
🎖 • *Role:* ${role}
💱 • *Limit:* ${limit}
📌 • *Owner:* ${global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Ya' : 'Tidak'}

📁 • *Database:* ${rtotalreg} dari ${totalreg}
🌟 • *Premium:* ${premium ? "✅" :"❌"}
📌 • *Terdaftar:* ${registered ? 'Ya ✅ (' + new Date(regTime).toLocaleString() + ')' : 'Tidak ❌'}${lastclaim > 0 ? '\nTerakhir Klaim: ' + new Date(lastclaim).toLocaleString() : ''}
⛔ • *Banned:* ❌

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, await(await require('node-fetch')(pp)).buffer(), pp.jpg, str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile|procfile|fropile|frocpile|pp$/i
module.exports = handler
