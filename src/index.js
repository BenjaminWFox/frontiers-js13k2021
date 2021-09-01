import './main.scss'
import { Person } from './person'
import { randomIntFromTuple } from './util'

let sTick = 0
let hsTick = 0
let qsTick = 0

let farmCountEl
let mineCountEl
let labsCountEl
let farmAmountEl
let mineAmountEl
let labsAmountEl

let villagers
let assignments = {
  idle: [],
  farm: [],
  mine: [],
  labs: [],
}
let amounts = {
  farm: 0,
  mine: 0,
  labs: 0,
}
const coords = {
  spawn: [100, 400],
  drop: [260, 290],
  job: [60, 116],
  homeBounds: [0, 550],
  travelBounds: [0, 270],
  jobBounds: [0, 176],
}
const regions = {
  home: '',
  travelLeft: '',
  travelRight: '',
  farm: '',
  mine: '',
  labs: '',
}

const addResource = (r) => {
  console.log('Dropping resource', r)

  amounts[r] += 10
}

const assign = (e) => {
  const [type, action] = e.target.id.split('-')

  switch (action) {
    case 'add':
      if (assignments.idle.length) {
        const v = assignments.idle.shift()
        const dest = randomIntFromTuple(coords.job)

        v.setJob(type, dest)
        assignments[type].push(v)
      }
      break
    case 'sub':
      if (assignments[type].length) {
        const v = assignments[type].shift()

        v.setJob('idle')
        assignments.idle.push(v)
      }
      break
    default:
      break
  }

  console.log(type, action)
}

const initJobButtons = () => {
  document.querySelectorAll('.assignBtn').forEach((button) => {
    button.addEventListener('click', assign)
  })
}

const init = () => {
  regions.home = document.getElementById('homeRegion')
  regions.travelLeft = document.getElementById('travelLeftRegion')
  regions.travelRight = document.getElementById('travelRightRegion')
  regions.farm = document.getElementById('farmRegion')
  regions.mine = document.getElementById('mineRegion')
  regions.labs = document.getElementById('labsRegion')
  farmCountEl = document.getElementById('farmCount')
  mineCountEl = document.getElementById('mineCount')
  labsCountEl = document.getElementById('labsCount')
  farmAmountEl = document.getElementById('farmAmount')
  mineAmountEl = document.getElementById('mineAmount')
  labsAmountEl = document.getElementById('labsAmount')

  initJobButtons()
}

const addVillager = (pos) => {
  const v = new Person()

  v.init(coords, regions, addResource)
  v.setPos(pos)
  v.setRegion('home')
  assignments.idle.push(v)

  return v
}

const begin = () => {
  villagers = []

  villagers.push(addVillager(randomIntFromTuple(coords.homeBounds)))
  villagers.push(addVillager(randomIntFromTuple(coords.homeBounds)))
  villagers.push(addVillager(randomIntFromTuple(coords.homeBounds)))

  villagers[1].setFaceDir('l')
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

    farmCountEl.innerHTML = assignments.farm.length
    mineCountEl.innerHTML = assignments.mine.length
    labsCountEl.innerHTML = assignments.labs.length
    farmAmountEl.innerHTML = amounts.farm
    mineAmountEl.innerHTML = amounts.mine
    labsAmountEl.innerHTML = amounts.labs
  }

  villagers.forEach((v) => {
    v.update(time)
  })

  // DEBUG Only
  pDebug.update(time)

  // Loop
  window.requestAnimationFrame(play)
}

window.onload = () => {
  init()

  // DEBUG Only
  assignDebug()

  begin()
  play()
}
