const river = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 31
  canvas.height = 22

  ctx.fillStyle = '#003cff'
  ctx.fillRect(19, 0, 3, 2)
  ctx.fillRect(16, 2, 6, 3)
  ctx.fillRect(13, 5, 12, 3)
  ctx.fillRect(10, 8, 15, 3)
  ctx.fillRect(6, 11, 19, 3)
  ctx.fillRect(3, 14, 22, 5)
  ctx.fillRect(0, 19, 31, 3)
} 
