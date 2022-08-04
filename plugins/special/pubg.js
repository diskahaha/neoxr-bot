exports.run = {
   usage: ['ytprem'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      const cover = await Func.fetchBuffer('./media/image/image3.jpeg')
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
return `「 YOUTUBE PREMIUM 4 BULAN 」

Youtube Premium 4 Bulan Full - Anda akan mendapatkan akun gmail fresh tinggal pakai ( bebas ganti pass) - full garansi selama masa aktif - bisa login di beberapa device - free youtube music - masa aktif full langsung 4 bulan - Silahkan entry email anda pada kolom Target Entry 1000=1 Akun`
}