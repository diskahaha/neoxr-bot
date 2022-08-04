exports.run = {
   usage: ['ttlike', 'tiktoklike'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      const cover = await Func.fetchBuffer('./assets/image1.jpeg')
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
return `「 TIKTOK LIKE 」

• 500 LIKE = 7.000
• 1000 LIKE = 14.000
• 5000 LIKE = 70.000
• 10000 LIKE = 130.000
• 50000 LIKE = 650.000
• 100000 LIKE = 1.300.000`
}