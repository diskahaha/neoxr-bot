exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      if (/menu|help/i.test(command)) {
         let rows = [{
            title: 'TIKTOK VIEWS',
            rowId: `${isPrefix}tiktokviews`,
            description: `⚡Speed 100k/days`
         }, {
            title: 'TIKTOK LIKE',
            rowId: `${isPrefix}ttlike`,
            description: `⚡Speed 1k/days`
         }, {
            title: 'INSTAGRAM FOLLOWERS',
            rowId: `${isPrefix}igfolow`,
            description: `👥Real indo fast`
         }, {
            title: 'INSTAGRAM LIKE',
            rowId: `${isPrefix}iglike`,
            description: `❤️Real indo aktif`
         }, {
            title: 'YOUTUBE PREMIUM',
            rowId: `${isPrefix}ytprem`,
            description: `premium 4 bulan`
         }]
         let text = '• Pilih salah satu Kategori\n• Pilih salah satu Layanan yang ingin dipesan'
         await client.sendList(m.chat, '', text, '', 'Select', [{
            rows
         }], m)
      } else if (command == 'bot') {
         client.reply(m.chat, setup(isPrefix), m)
      }
   },
   error: false
}

const setup = prefix => {
return `◦  ${prefix}backup
◦  ${prefix}+owner *mention or reply*
◦  ${prefix}-owner *mention or reply*
◦  ${prefix}prefix *symbol*
◦  ${prefix}+prefix *symbol*
◦  ${prefix}-prefix *symbol*
◦  ${prefix}restart
◦  ${prefix}runtime
◦  ${prefix}hidetag
◦  ${prefix}group *close or open*
◦  ${prefix}setname *text*
◦  ${prefix}setdesc *text*`
}