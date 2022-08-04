exports.run = {
   usage: ['igfolow', 'instagramfoll'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      const cover = await Func.fetchBuffer('./assets/image4.jpeg')
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
return `「 INSTAGRAM FOLLOWER INDO AKTIF 」

• 300 FOLLOWERS= 8.000 
• 600 FOLLOWERS= 15.000 
• 1000 FOLLOWERS= 30.000 
• 5000 FOLLOWERS= 150.000
• 10000 FOLLOWERS = 290.000`
}