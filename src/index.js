import './main.scss'
import gameImage from './assets/images/sprites/game-image.png'
import { Person } from './person'

// console.log('Hello World')

// const testESNext = (Math.random() > .5 ? 'ES2020Working' : null)
// const testESNext2 = {
//   child: {
//     node: null,
//   },
// }

// const method = () => {
//   console.log('Hello Method')
// }

// method()

// console.log(testESNext ?? 'ES2020 Is Working')
// console.log(testESNext2?.child?.node?.other)
// try {
//   console.log(testESNext2?.child?.node.other)
// }
// catch (e) {
//   console.log('Caught the error', e.toString())
// }

// Using an imported image
// const imgEl = document.getElementById('jsImage')
// const image = document.createElement('img')

// image.src = gameImage
// imgEl.appendChild(image)
let p1

const debug = {
  jump: undefined,
  armUp: undefined,
  armOut: undefined,
  armDown: undefined,
}

const assignDebug = () => {
  debug.jump = document.getElementById('dbgJump')
  debug.armDown = document.getElementById('dbgArmDown')
  debug.armOut = document.getElementById('dbgArmOut')
  debug.armUp = document.getElementById('dbgArmUp')
  debug.switchDir = document.getElementById('dbgSwitchDir')
  debug.still = document.getElementById('dbgStill')
  debug.walk = document.getElementById('dbgWalk')

  debug.jump.addEventListener('click', () => {
    console.log(p1)
    p1.jump()
  })
  debug.armDown.addEventListener('click', () => {
    console.log(p1)
    p1.setArms('d')
  })
  debug.armOut.addEventListener('click', () => {
    p1.setArms('f')
  })
  debug.armUp.addEventListener('click', () => {
    p1.setArms('u')
  })
  debug.switchDir.addEventListener('click', () => {
    p1.faceDir === 'r' ? p1.setFaceDir('l') : p1.setFaceDir('r')
  })
  debug.still.addEventListener('click', () => {
    p1.setWalking(false)
  })
  debug.walk.addEventListener('click', () => {
    p1.setWalking(true)
  })
}

let sTick = 0
let hsTick = 0
let qsTick = 0

function play(time) {

  if (sTick + 1000 < time) {
    sTick = time
  }

  if (hsTick + 500 < time) {
    hsTick = time
  }

  if (qsTick + 250 < time) {
    qsTick = time
  }

  p1.update(time)

  window.requestAnimationFrame(play)
}

window.onload = () => {
  p1 = new Person()

  p1.init()

  const home = document.getElementById('home')

  home.appendChild(p1.canvas)

  assignDebug()

  play()
}
