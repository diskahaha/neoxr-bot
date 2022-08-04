exports.run = {
   usage: ['iglike', 'instagramlike'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      const cover = await Func.fetchBuffer('./media/image/image5.jpeg')
      const buttons = [{
         urlButton: {
            displayText: `Website`,
            url: `https://google.com`
         }
      }, {
         quickReplyButton: {
            displayText: `Payment`,
            id: `${isPrefix}payment`
         }
      }]
      await client.sendTemplateButton(m.chat, cover, items(), global.db.setting.watermark, buttons, {
         location: true
      })
   },
   error: false,
   cache: true,
   location: __filename
}

const items = () => {
return `「 INSTAGRAM LIKE REAL INDO AKTIF 」

• 500 LIKE = 5.000
• 1000 LIKE = 10.000
• 2000 LIKE = 20.000
• 3000 LIKE = 30.000
• 4000 LIKE = 40.000
• 5000 LIKE = 50.000
• 6000 LIKE = 60.000
• 7000 LIKE = 70.000
• 8000 LIKE = 80.000
• 9000 LIKE = 90.000
• 10000 LIKE = 100.000`
}