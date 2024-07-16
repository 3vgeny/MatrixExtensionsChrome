const SYMBOLS =
  'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトホモヨョロヲゴゾドボポヴッン'

export class Column {
  constructor(x, fontSize, canvasHeight, context) {
    this.x = x
    this.y = 0
    this.canvasHeight = canvasHeight
    this.fontSize = fontSize
    this.context = context
  }

  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.98) {
      return
    }
    const symbolsIndex = Math.floor(Math.random() * SYMBOLS.length)
    const symbol = SYMBOLS[symbolsIndex]

    this.context.fillText(symbol, this.x, this.y)

    if (this.y > this.canvasHeight) {
      this.y = 0
    } else {
      this.y += this.fontSize
    }
  }
}
