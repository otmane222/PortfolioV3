import localFont from '@next/font/local'

const zendaya = localFont({
  src: [
    {
      path: '/fonts/Zendaya.otf',  // Correct path relative to the public directory
      weight: '400',
    },
  ],
  variable: '--font-Zendaya',
})

export default zendaya;