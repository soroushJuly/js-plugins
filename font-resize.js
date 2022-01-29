export default function () {
  const variableResize = function () {
    const width = window.innerWidth
    const html = document.querySelector('html')
    if (width > 600) {
      if (html) {
        html.style.fontSize = ''
      }
      return
    }
    const fontSize = (width / 600) * 12 + 5
    if (html) {
      html.style.fontSize = fontSize + 'px'
    }
  }

  if (process.client) {
    window.addEventListener('load', variableResize)
    window.addEventListener('resize', variableResize)
  }
}
