import './main.scss'
import { Person } from './person'

let sTick = 0
let hsTick = 0
let qsTick = 0

let homeRegion
let travelLeftRegion
let travelRightRegion
let farmRegion
let mineRegion
let labsRegion

const init = () => {
  homeRegion = document.getElementById('homeRegion')
  travelLeftRegion = document.getElementById('travelLeftRegion')
  travelRightRegion = document.getElementById('travelRightRegion')
  farmRegion = document.getElementById('farmRegion')
  mineRegion = document.getElementById('mineRegion')
  labsRegion = document.getElementById('labsRegion')
}

/**
 * DEBUG Only
 */

let pDebug = { update: () => {} }
let assignDebug = () => {}

// const debug = {
//   jump: undefined,
//   armUp: undefined,
//   armOut: undefined,
//   armDown: undefined,
// }

// assignDebug = () => {
//   pDebug = new Person()

//   pDebug.init()

//   homeRegion.appendChild(pDebug.canvas)

//   debug.jump = document.getElementById('dbgJump')
//   debug.armDown = document.getElementById('dbgArmDown')
//   debug.armOut = document.getElementById('dbgArmOut')
//   debug.armUp = document.getElementById('dbgArmUp')
//   debug.switchDir = document.getElementById('dbgSwitchDir')
//   debug.still = document.getElementById('dbgStill')
//   debug.walk = document.getElementById('dbgWalk')

//   debug.jump.addEventListener('click', () => {
//     console.log(pDebug)
//     pDebug.jump()
//   })
//   debug.armDown.addEventListener('click', () => {
//     console.log(pDebug)
//     pDebug.setArms('d')
//   })
//   debug.armOut.addEventListener('click', () => {
//     pDebug.setArms('f')
//   })
//   debug.armUp.addEventListener('click', () => {
//     pDebug.setArms('u')
//   })
//   debug.switchDir.addEventListener('click', () => {
//     pDebug.faceDir === 'r' ? pDebug.setFaceDir('l') : pDebug.setFaceDir('r')
//   })
//   debug.still.addEventListener('click', () => {
//     pDebug.setWalking(false)
//   })
//   debug.walk.addEventListener('click', () => {
//     pDebug.setWalking(true)
//   })
// }

/**
 * END DEBUG Only
 */

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

  // DEBUG Only
  pDebug.update(time)

  window.requestAnimationFrame(play)
}

window.onload = () => {
  init()

  // DEBUG Only
  assignDebug()

  play()
}
