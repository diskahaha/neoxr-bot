exports.run = {
   usage: ['tiktokviews', 'ttview'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      const cover = await Func.fetchBuffer('./media/image/image2.jpeg')
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
return `「 TIKTOK VIEWS 」

• 1K VIEWS = 500
• 5k VIEWS = 1.500
• 10K VIEWS = 3.000
• 20K VIEWS = 6.000
• 40K VIEWS = 11.000
• 80K VIEWS = 20.000
• 100K VIEWS = 35.000
• 200K VIEWS = 50.000`
}