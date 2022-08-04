exports.run = {
   usage: ['payment', 'qris'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      if (command == 'payment') {
         const cover = await Func.fetchBuffer('./assets/payment.jpeg')
         const buttons = [{
            quickReplyButton: {
               displayText: `QRIS`,
               id: `${isPrefix}qris`
            }
         }]
         await client.sendTemplateButton(m.chat, cover, pay(), global.db.setting.watermark, buttons, {
            location: true
         })
      } else if (command == 'qris') {
         const qris = await Func.fetchBuffer('./assets/qris.jpeg')
         client.sendFile(m.chat, qris, '', '', m)
      }
   },
   cache: true,
   location: __filename
}

const pay = () => {
   return `「 PAYMENT 」 

Silahkan lakukan pembayaran melalui nomor e-wallet dibawah :

OVO : 089653896400
DANA : 089653896400
GOPAY : 089653896400

An. CAxxx
Screenshoot Bukti Transfer dan kirim kesini !`
}