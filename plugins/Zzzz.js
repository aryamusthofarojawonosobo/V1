const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
✧┈─━━ [ RULES ] ━━┈─✧

1️⃣ Pengguna dapat menggunakan semua perintah/command dengan batasan limit terkecuali user premium dengan limit tanpa batas/unlimited, dan tidak melakukan spam terhadap bot.
2️⃣ Pengguna yang mengirim hal atau data pribadi tidak akan disimpan oleh bot ini, dan tidak akan bertanggung jawab atas data pribadi tersebut!
3️⃣ Mohon untuk tidak Spam/Menelfon Bot karena beresiko no anda akan di *banned*
 
⭐ *Kebijakan Privasi*
1️⃣ Owner tidak akan menyalah gunakan data user
2️⃣ Owner tidak akan merekam data riwayat chat user
3️⃣ Owner berhak melihat data riwayat chat users.
4️⃣ Owner berhak melihat status users.
5️⃣ Owner dapat melihat riwayat chat, dan media yang dikirimkan users.

⭐ *Peraturan*
1️⃣ Users dilarang menelfon maupun memvideo call nomor bot.
2️⃣ Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3️⃣ Users diharap tidak melakukan spam dalam penggunaan bot.
4️⃣ Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5️⃣ Users diharap untuk tidak menyalah gunakan fitur fitur bot.

⭐ *Syarat Ketentuan*
1️⃣ Bot akan keluar dari group apabila sudah waktunya keluar.
2️⃣ Bot dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3️⃣ Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4️⃣ Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya2)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: '📮 Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'JOIN GROUP BOT',
               url: gc
             }

           },
                {
               urlButton: {
               displayText: '🔮Myweb🔮',
               url: web
             }

           },
               {
             quickReplyButton: {
               displayText: 'Script',
               id: '.sc',
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
               displayText: 'Runtime',
               id: '.runtime',
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

handler.tags = ['main', 'update']
handler.command = /^(rules|rule|snk)$/i
handler.help = ['rules']
module.exports = handler
