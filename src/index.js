import './main.scss'
import { Person } from './person'
import { randomIntFromTuple } from './util'
import farmImg from '../src/assets/images/icons/corn.png'
import mineImg from '../src/assets/images/icons/rock.png'
import labsImg from '../src/assets/images/icons/labs.png'

/* eslint-disable */
//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
// zzfx() - the universal entry point -- returns a AudioBufferSourceNode
const zzfx = (...t) => zzfxP(zzfxG(...t))

// zzfxP() - the sound player -- returns a AudioBufferSourceNode
const zzfxP = (...t) => { let e = zzfxX.createBufferSource(), f = zzfxX.createBuffer(t.length, t[0].length, zzfxR); t.map((d, i) => f.getChannelData(i).set(d)), e.buffer = f, e.connect(zzfxX.destination), e.start(); return e }

// zzfxG() - the sound generator -- returns an array of sample data
const zzfxG = (q = 1, k = .05, c = 220, e = 0, t = 0, u = .1, r = 0, F = 1, v = 0, z = 0, w = 0, A = 0, l = 0, B = 0, x = 0, G = 0, d = 0, y = 1, m = 0, C = 0) => { let b = 2 * Math.PI, H = v *= 500 * b / zzfxR ** 2, I = (0 < x ? 1 : -1) * b / 4, D = c *= (1 + 2 * k * Math.random() - k) * b / zzfxR, Z = [], g = 0, E = 0, a = 0, n = 1, J = 0, K = 0, f = 0, p, h; e = 99 + zzfxR * e; m *= zzfxR; t *= zzfxR; u *= zzfxR; d *= zzfxR; z *= 500 * b / zzfxR ** 3; x *= b / zzfxR; w *= b / zzfxR; A *= zzfxR; l = zzfxR * l | 0; for (h = e + m + t + u + d | 0; a < h; Z[a++] = f)++K % (100 * G | 0) || (f = r ? 1 < r ? 2 < r ? 3 < r ? Math.sin((g % b) ** 3) : Math.max(Math.min(Math.tan(g), 1), -1) : 1 - (2 * g / b % 2 + 2) % 2 : 1 - 4 * Math.abs(Math.round(g / b) - g / b) : Math.sin(g), f = (l ? 1 - C + C * Math.sin(2 * Math.PI * a / l) : 1) * (0 < f ? 1 : -1) * Math.abs(f) ** F * q * zzfxV * (a < e ? a / e : a < e + m ? 1 - (a - e) / m * (1 - y) : a < e + m + t ? y : a < h - d ? (h - a - d) / u * y : 0), f = d ? f / 2 + (d > a ? 0 : (a < h - d ? 1 : (h - a) / d) * Z[a - d | 0] / 2) : f), p = (c += v += z) * Math.sin(E * x - I), g += p - p * B * (1 - 1E9 * (Math.sin(a) + 1) % 2), E += p - p * B * (1 - 1E9 * (Math.sin(a) ** 2 + 1) % 2), n && ++n > A && (c += w, D += w, n = 0), !l || ++J % l || (c = D, v = H, n = n || 1); return Z }

// zzfxV - global volume
const zzfxV = .1

// zzfxR - global sample rate
const zzfxR = 44100

// zzfxX - the common audio context
const zzfxX = new (window.AudioContext || webkitAudioContext);
//! ZzFXM (v2.0.3) | (C) Keith Clark | MIT | https://github.com/keithclark/ZzFXM
const zzfxM = (n, f, t, e = 125) => { let l, o, z, r, g, h, x, a, u, c, d, i, m, p, G, M = 0, R = [], b = [], j = [], k = 0, q = 0, s = 1, v = {}, w = zzfxR / e * 60 >> 2; for (; s; k++)R = [s = a = d = m = 0], t.map((e, d) => { for (x = f[e][k] || [0, 0, 0], s |= !!f[e][k], G = m + (f[e][0].length - 2 - !a) * w, p = d == t.length - 1, o = 2, r = m; o < x.length + p; a = ++o) { for (g = x[o], u = o == x.length + p - 1 && p || c != (x[0] || 0) | g | 0, z = 0; z < w && a; z++ > w - 99 && u ? i += (i < 1) / 99 : 0)h = (1 - i) * R[M++] / 2 || 0, b[r] = (b[r] || 0) - h * q + h, j[r] = (j[r++] || 0) + h * q + h; g && (i = g % 1, q = x[1] || 0, (g |= 0) && (R = v[[c = x[M = 0] || 0, g]] = v[[c, g]] || (l = [...n[c]], l[2] *= 2 ** ((g - 12) / 12), g > 0 ? zzfxG(...l) : []))) } m = G }); return [b, j] }

const song = [[[, 0, 740, , , .15, 2, .2, -.1, -.15, 9, .02, , .1, .12, , .06], [3, 0, 43, , , .25, , , , , , , , 2], [, 0, 219, , , , , 1.1, , -.1, -50, -.05, -.01, 1], [.8, 0, 2100, , , .2, 3, 3, , , -400, , , 2]], [[[, , 1, , , , 1, 5, 8, , , , , , 5, 10, , , 10, 10, , , 10, 6, 8, , , , , , 10, , 10, , 8, 8, , 5, 3, , 1, 5, 5, , , , 12, 13, 13, , 10, 10, , 5, , , 8, 3, , , , 6, 6, , 5, 3], [, , 5, , , , 5, 8, 13, , , , , , 6, 13, , , 15, 13, , , 13, 10, 8, , , , , , 17, , 17, , 15, 15, , 13, 10, , 1, 13, 15, , , , 15, 5, 3, , 1, 1, , , , , 3, 8, , , , 5, 5, , 1, 3], [, , 1, , , , 1, 5, 8, , , , , , 5, 10, , , 10, 10, , , 10, 6, 8, , , , , , 10, , 10, , 8, 8, , 5, 3, , 1, 5, 5, , , , 12, 13, 13, , 10, 10, , 5, , , 8, 3, , , , 6, 6, , 5, 3], [, , , , 32, 29, , , , , , , 30, 27, , , , , , , , , , , , , , 30, 27, 29, , , , , , , , 25, 29, 27, , , , , , , , , , , , , , , , , , , 32, 29, 32, , , , , ,], [1, , 13, , , , , , , , 20, 10, , , , , , , 13, , , , , , , , 25, 12, , , , , , , 13, , , , , , , , 20, 10, , , , , , , 13, , , , , , , , 25, 12, , , , , , ,], [2, , , , , , , , , , , , 20, , , 13, , , , , , , 1, , , , , , 25, , , 20, , , , , , , , , , , , , 20, , , 13, , , , , , , , , , , , , 25, , , 20, , ,], [3, , , , , , , , , , , , 13, , 13, 10, , , , , , , , , , , , , 20, , 20, 5, , , , , , , , , , , , , 13, , 13, 10, , , , , , , , , , , , , 20, , 20, 5, , ,]]], [0], 104, { "title": "HorizonsV1", "instruments": ["Flute", "Bass Drum 2", "Snare 2", "Hihat Open"], "patterns": ["Pattern 0"] }]

// const player = zzfxP(...zzfxM(...song))
// player.loop = true
/* eslint-enable */

let RECRUIT_MOD = 1

let sTick = 0
let hsTick = 0
let qsTick = 0

let workingCountEl
let farmCountEl
let mineCountEl
let labsCountEl
let farmAmountEl
let mineAmountEl
let labsAmountEl
let farmImgEl
let mineImgEl
let labsImgEl
let mainButtonsEl

let villagers
let assignments
const resetAssignments = () => {
  assignments = {
    idle: [],
    farm: [],
    mine: [],
    labs: [],
  }
}
let amounts
const resetAmounts = () => {
  amounts = {
    farm: 0,
    mine: 0,
    labs: 0,
  }
}
let images = {
  farm: new Image(),
  mine: new Image(),
  labs: new Image(),
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
let events
const resetEvents = () => {
  events = {
    recruit: false,
    nutrition: false,
    upgrade1: false,
    upgrade2: false,
  }
}

const updateResources = () => {
  farmAmountEl.innerHTML = amounts.farm
  mineAmountEl.innerHTML = amounts.mine
  labsAmountEl.innerHTML = amounts.labs
}

const recruitVillager = () => {
  if (amounts.farm >= 10) {
    amounts.farm -= 10
    updateResources()
    addVillager()
  }
}

const checkEvents = () => {
  if (amounts.farm >= 10) {
    mainButtonsEl.appendChild(createButton('Recruit Villager', recruitVillager, 10))
  }
  // Recruit Villager f: 10

  // Nutrition Guidelines: f: 30 l: 20 -> Faster Movement
  // Fancier Tools: m: 40 l: 40 -> Faster Work
  // Erganomic Backpacks: m: 20 l: 40 -> More Carry
  // Work Fulfillment Propaganda l: 20 -> Faster Move and Work

  // Bridge Rivers m: 40 l: 30

  // Upgrade Society f: 100 m: 100 l: 100

  // Colonize New Planet f: 200 m: 200 l: 200
}

const addResource = (r) => {
  console.log('Dropping resource', r)

  amounts[r] += 10

  updateResources()
  checkEvents()
}

const createButton = (text, fn, f, m, l) => {
  const btn = document.createElement('button')
  const csts = document.createElement('div')
  const cst = document.createElement('span')

  btn.addEventListener('click', fn)
  btn.classList.add('mainBtn')
  btn.innerHTML = text
  csts.classList.add('costs')
  btn.appendChild(csts)
  cst.classList.add('cost')

  if (f) {
    const fel = cst.cloneNode()

    fel.innerHTML = `<img src="${farmImg}"/>: ${f}`

    csts.appendChild(fel)
  }

  if (m) {
    const fel = cst.cloneNode()

    fel.innerHTML = `<img src="${mineImg}"/>: ${m}`

    csts.appendChild(fel)
  }

  if (l) {
    const fel = cst.cloneNode()

    fel.innerHTML = `<img src="${labsImg}"/>: ${l}`

    csts.appendChild(fel)
  }


  return btn
}

const updateWorking = () => workingCountEl.innerHTML = `${assignments.farm.length + assignments.mine.length + assignments.labs.length} / ${villagers.length} working`

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
  farmCountEl.innerHTML = assignments.farm.length
  mineCountEl.innerHTML = assignments.mine.length
  labsCountEl.innerHTML = assignments.labs.length

  updateWorking()
}

const initJobButtons = () => {
  document.querySelectorAll('.assignBtn').forEach((button) => {
    button.addEventListener('click', assign)
  })
}

const resetAll = () => {
  villagers = []
  resetEvents()
  resetAmounts()
  resetAssignments()
}

const init = () => {
  resetAll()

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
  farmImgEl = document.getElementById('matFarm')
  mineImgEl = document.getElementById('matMine')
  labsImgEl = document.getElementById('matLabs')
  workingCountEl = document.getElementById('working')
  mainButtonsEl = document.getElementById('mainButtons')

  farmImgEl.src = farmImg
  mineImgEl.src = mineImg
  labsImgEl.src = labsImg
  images.farm.src = farmImg
  images.mine.src = mineImg
  images.labs.src = labsImg

  initJobButtons()
}

const addVillager = (pos = randomIntFromTuple(coords.homeBounds)) => {
  const v = new Person()

  v.init(coords, regions, addResource, images)
  v.setPos(pos)
  v.setRegion('home')
  v.setFaceDir(randomIntFromTuple([0, 1]) === 0 ? 'r' : 'l')
  assignments.idle.push(v)

  villagers.push(v)

  checkEvents()
  updateWorking()

  return v
}

const begin = () => {
  addVillager()
  addVillager()

  updateWorking()
}

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

  villagers.forEach((v) => {
    v.update(time)
  })

  // Loop
  window.requestAnimationFrame(play)
}

window.onload = () => {
  init()
  begin()
  play()
}
