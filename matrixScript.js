import { Column } from './matrixColumn.js'

const canvas = document.getElementById('canvas')
// console.log(canvas)
const context = canvas.getContext('2d')
// console.log(context)

canvas.width = window.innerWidth
canvas.height = window.innerHeight
// console.log(canvas.width, canvas.height)

const FONT_SIZE = 16

const columns = []

// console.log(canvas.width, FONT_SIZE)
const columnsCounter = canvas.width / FONT_SIZE
// console.log(columnsCounter)

for (let i = 0; i < columnsCounter; i++) {
  columns.push(new Column(i * FONT_SIZE, FONT_SIZE, canvas.height, context))
}

context.font = 'bold 16px monospace'
context.fillStyle = 'green'

// context.fillText('M', 100, 100)
// context.fillText('M', 100, 100 + FONT_SIZE)

const column = new Column(100, FONT_SIZE, canvas.height, context)

function animation() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = 'green'
  columns.forEach((column) => column.drawSymbol())

  setTimeout(() => requestAnimationFrame(animation), 50)
}

animation()
