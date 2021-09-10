import { randomIntInclusive, randomIntFromTuple } from './util'
import { travelAgent } from './travelAgent'
import { settings } from './settings'

const EYES = [
  '#2cc342',
  '#6ad7eb',
  '#83766b',
  '#231202',
]

const SKIN_TONES = [
  { skin: '#fdf6ec', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#cd6550' },
  { skin: '#ffe8ca', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#cd6550' },
  { skin: '#ffdaa9', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#cd6550' },
  { skin: '#d3a363', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#cd6550' },
  { skin: '#b57a2b', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#f5beb3' },
  { skin: '#764505', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#f5beb3' },
  { skin: '#512f01', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#f5beb3' },
  { skin: '#331e02', eye: EYES[randomIntInclusive(0, EYES.length - 1)], mouth: '#f5beb3' },
]

const TOPS = [
  { main: '#cd7944', second: '#d59770' },
  { main: '#d07373', second: '#e09999' },
  { main: '#b16bcb', second: '#c99ed9' },
  { main: '#d073a3', second: '#da9bbb' },
]
const BOTTOMS = [
  '#446bcd',
  '#6bc3cb',
  '#d0cb73',
  '#77cb6b',
]

const HAIR = [
  '#66201b',
  '#996f03',
  '#737373',
  '#030716',
]

const createBody = (skintone, tTone, bTone, hTone) => {
  const bodyCanvas = document.createElement('canvas')
  const ctx = bodyCanvas.getContext('2d')
  const type = settings.moreTypes ? randomIntInclusive(0, 1) : 0
  const gen = settings.moreTypes ? randomIntInclusive(0, 1) : 0
  const hair = randomIntInclusive(0, 2)

  // head
  ctx.fillStyle = skintone.skin

  ctx.fillRect(18, 11, 8, 8)

  // torso
  ctx.fillStyle = tTone.main
  ctx.fillRect(18 - type, 19, 8 + (type * 2), 12)

  if (gen) {
    ctx.fillRect(26 + type, 21, 1, 5)
  }

  // hair
  if (settings.moreTypes) {
    if (hair) {
      ctx.fillStyle = hTone
      ctx.beginPath()
      ctx.moveTo(18, 11)
      ctx.lineTo(24, 11)
      ctx.lineTo(18, 17)
      ctx.fill()
    }

    if (hair === 1) {
      ctx.fillRect(19, 10, 5, 1)
      ctx.fillRect(17, 12, 1, 7)
    }

    if (hair === 2) {
      ctx.fillRect(16, 11, 2, 13)
    }
  }

  // legs
  ctx.fillStyle = bTone
  ctx.fillRect(18, 31, 8, 9)

  // eyes
  ctx.fillStyle = skintone.eye
  ctx.fillRect(23, 13, 2, 2)

  // pupil
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(24, 14, 1, 1)

  // mouth
  ctx.fillStyle = skintone.mouth
  ctx.fillRect(24, 17, 2, 1)

  return bodyCanvas
}

const createArms = (dir = 'd', skintone, tTone) => {
  const armCanvas = document.createElement('canvas')
  const ctx = armCanvas.getContext('2d')

  armCanvas.width = 44
  armCanvas.height = 44

  switch (dir) {
    default:
    case 'd':
      ctx.fillStyle = tTone.second
      ctx.fillRect(20, 21, 4, 11)

      ctx.fillStyle = skintone.skin
      ctx.fillRect(20, 32, 4, 3)
      ctx.fillRect(24, 32, 1, 1)
      break
    case 'f':
      ctx.fillStyle = tTone.second
      ctx.fillRect(21, 21, 11, 4)

      ctx.fillStyle = skintone.skin
      ctx.fillRect(32, 21, 3, 4)
      ctx.fillRect(32, 20, 1, 1)
      break
    case 'u':
      ctx.fillStyle = tTone.second
      ctx.fillRect(20, 10, 4, 11)

      ctx.fillStyle = skintone.skin
      ctx.fillRect(20, 7, 4, 3)
      ctx.fillRect(19, 9, 1, 1)
      break
  }

  return armCanvas
}

const createPick = (dir = 'd') => {
  const pickCanvas = document.createElement('canvas')
  const ctx = pickCanvas.getContext('2d')

  pickCanvas.width = 44
  pickCanvas.height = 44

  switch (dir) {
    default:
    case 'd':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(24, 33, 11, 2)
      ctx.fillRect(19, 33, 1, 2)

      ctx.fillStyle = '#767676'
      ctx.fillRect(35, 27, 1, 14)
      ctx.fillRect(36, 28, 1, 12)
      break
    case 'f':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(33, 9, 2, 11)
      ctx.fillRect(33, 25, 2, 1)

      ctx.fillStyle = '#767676'
      ctx.fillRect(28, 7, 12, 1)
      ctx.fillRect(27, 8, 14, 1)
      break
    case 'u':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(9, 7, 11, 2)
      ctx.fillRect(24, 7, 1, 2)

      ctx.fillStyle = '#767676'
      ctx.fillRect(7, 2, 1, 12)
      ctx.fillRect(8, 1, 1, 14)
      break
  }

  return pickCanvas
}

const createHoe = (dir) => {
  const hoeCanvas = document.createElement('canvas')
  const ctx = hoeCanvas.getContext('2d')

  hoeCanvas.width = 44
  hoeCanvas.height = 44

  switch (dir) {
    default:
    case 'd':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(24, 33, 16, 2)
      ctx.fillRect(19, 33, 1, 2)

      ctx.fillStyle = '#767676'
      ctx.fillRect(40, 33, 2, 6)
      break
    case 'f':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(33, 5, 2, 16)
      ctx.fillRect(33, 25, 2, 1)

      ctx.fillStyle = '#767676'
      ctx.fillRect(33, 3, 6, 2)
      break
    case 'u':
      ctx.fillStyle = '#3c2601'
      ctx.fillRect(4, 7, 16, 2)
      ctx.fillRect(24, 7, 1, 2)

      ctx.fillStyle = '#767676'
      ctx.fillRect(2, 4, 2, 5)
      break
  }

  return hoeCanvas
}

const createFeet = () => {
  const legCanvas = document.createElement('canvas')
  const ctx = legCanvas.getContext('2d')

  legCanvas.width = 6
  legCanvas.height = 4

  // feet
  ctx.fillStyle = '#000000'
  ctx.fillRect(0, 0, 4, 4)
  ctx.fillRect(4, 3, 2, 2)

  return legCanvas
}

export function Person() {
  /**
   * Canvas * Context
   */
  this.canvas = document.createElement('canvas')
  this.canvas.classList.add('villager')
  this.canvas.style.transition = 'bottom .15s'
  this.canvas.style.position = 'absolute'
  this.canvas.style.bottom = '2px'
  this.canvas.width = 44
  this.canvas.height = 44
  this.context = this.canvas.getContext('2d')

  /**
   * Visual Settings
   */
  this.skintone = SKIN_TONES[randomIntInclusive(0, SKIN_TONES.length - 1)]
  this.tTone = TOPS[randomIntInclusive(0, TOPS.length - 1)]
  this.bTone = BOTTOMS[randomIntInclusive(0, BOTTOMS.length - 1)]
  this.hTone = HAIR[randomIntInclusive(0, HAIR.length - 1)]
  this.armPos = 'd'
  this.faceDir = 'r'

  /**
   * Stored Images
   */
  this.body
  this.arms
  this.feet
  this.pick
  this.hoe

  /**
   * Action States
   */
  this.crouching = false
  this.walking = false
  this.jumping = false
  this.working = false
  this.dropping = false

  /**
   * Value Trackers
   */
  this.lastStep = 0
  this.lastStepTime = 0
  this.jumpTime = 0
  this.workTime = 0
  this.timesWorked = 0
  this.pos = 0
  // idle, farm, mine, labs
  this.job = 'idle'
  // idle, goToWork, doWork, drop
  this.task = 'idle'
  // home, travelLeft, travelRight, farm, mine, labs
  this.region = 'home'
  this.coords
  this.regions
  this.destCoords
  this.carrying = ''

  this.draw = (tool = null) => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.drawImage(this.body, 0, 0)
    this.context.drawImage(this.arms[this.armPos], 0, 0)

    if (tool) {
      this.context.drawImage(this.[tool][this.armPos], 0, 0)
    }
    else if (this.job === 'mine') {
      this.context.drawImage(this.pick[this.armPos], 0, 0)
    }
    else if (this.job === 'farm') {
      this.context.drawImage(this.hoe[this.armPos], 0, 0)
    }

    if (this.carrying) {
      this.context.drawImage(this.resourceImages[this.carrying], 17, 0)
    }

    this.drawFeet()
  }

  this.drawFeet = (offset = 0) => {
    const x = 20 - offset

    this.context.clearRect(18, 40, 9, 4)
    this.crouching ? this.context.drawImage(this.feet, x, 38) : this.context.drawImage(this.feet, x, 40)
  }

  this.getBody = () => createBody(this.skintone, this.tTone, this.bTone, this.hTone)

  this.init = (worldCoordsObject, worldRegionsObject, worldAddResource, worldResourceImages) => {
    this.coords = worldCoordsObject
    this.regions = worldRegionsObject
    this.regions.home.appendChild(this.canvas)
    this.addResource = worldAddResource
    this.resourceImages = worldResourceImages

    this.body = this.getBody()
    this.feet = createFeet()
    this.arms = {
      u: createArms('u', this.skintone, this.tTone),
      f: createArms('f', this.skintone, this.tTone),
      d: createArms('d', this.skintone, this.tTone),
      b: createArms('b', this.skintone, this.tTone),
    }
    this.pick = {
      u: createPick('u'),
      f: createPick('f'),
      d: createPick('d'),
      b: createPick('b'),
    }
    this.hoe = {
      u: createHoe('u'),
      f: createHoe('f'),
      d: createHoe('d'),
      b: createHoe('b'),
    }
    this.setPos(0)
    this.draw()
  }

  this.update = (time) => {
    if (this.jumping) {
      this.doJump(time)
    }
    else if (this.task === 'idle' && this.job === 'idle') {
      this.jump()
    }

    if (this.walking) {
      let dirMod = this.faceDir === 'r' ? 1 : -1

      this.setPos(this.pos + (2 * settings.moveMod * settings[this.region] * dirMod))

      if (this.lastStepTime + 100 < time) {
        if (this.lastStepPos === 'f') {
          this.drawFeet(-1)
          this.lastStepPos = 'b'
        }
        else {
          this.drawFeet(1)
          this.lastStepPos = 'f'
        }

        this.lastStepTime = time
      }

      travelAgent(this)
    }

    if (this.working) {
      if (this.timesWorked > 5) {
        this.working = false
        this.walking = true
        this.dropping = true
        this.task = 'drop'
        this.destCoords = randomIntFromTuple(this.coords.drop)
        this.setArms('d')
        this.carrying = this.job === 'idle' ? '' : this.job
        this.draw()
        this.timesWorked = 0
      }
      else if (this.workTime + (settings.workSpeed - settings.workMod) < time) {
        const isUp = !(this.timesWorked % 2)

        switch (this.job) {
          case 'mine':
            if (isUp) {
              this.setArms('u')
              this.draw()
            }
            else {
              this.setArms('f')
              this.draw()
            }
            break
          case 'farm':
            if (isUp) {
              this.setArms('f')
              this.draw()
            }
            else {
              this.setArms('d')
              this.draw()
            }
            break
          case 'labs':
            if (isUp) {
              this.setArms('u')
              this.draw()
            }
            else {
              this.setArms('f')
              this.draw()
            }
            break
          default: break
        }

        this.timesWorked += 1
        this.workTime = time
      }
    }
  }

  this.jump = () => {
    this.jumping = true
    this.jumpTime = 0
  }

  this.setPos = (p) => {
    this.pos = p
    this.canvas.style.left = `${p}px`
  }

  this.setRegion = (r) => {
    this.region = r
  }

  this.setArms = (dir) => {
    this.armPos = dir
    this.draw()
  }

  this.setWalking = (isWalking = false) => {
    this.walking = isWalking
    this.lastStepTime = 0
    this.lastStepPos = 'f'

    if (!isWalking) {
      this.drawFeet()
    }
  }

  this.setJob = (j) => {
    this.job = j

    if (j === 'idle' && this.task !== 'drop') {
      this.destCoords = randomIntFromTuple(this.coords.homeBounds)
      this.task = 'idle'
    }
    else if (j !== 'idle' && this.task !== 'drop') {
      this.task = 'work'
      this.destCoords = randomIntFromTuple(this.coords.job)
    }

    this.walking = true
    this.draw()
  }

  this.setFaceDir = (d) => {
    if (d === 'r') {
      this.canvas.style.transform = 'rotateY(0deg)'
      this.faceDir = 'r'
    }
    else if (d === 'l') {
      this.canvas.style.transform = 'rotateY(180deg)'
      this.faceDir = 'l'
    }
  }

  this.doJump = (time) => {
    if (this.jumpTime === 0) {
      this.canvas.style.bottom = '0px'
      this.crouching = true
      this.draw()
      this.jumpTime = time
    }
    else if (this.jumpTime + 300 < time) {
      this.canvas.style.bottom = '2px'
      this.jumping = false
    }
    else if (this.jumpTime + 150 < time) {
      this.crouching = false
      this.draw()
      this.canvas.style.bottom = '10px'
    }
  }

  this.doWork = () => {
    this.walking = false
    this.working = true
    this.timesWorked = 0
    this.workTime = 0
  }

  this.doDrop = () => {
    this.addResource(this.carrying)
    this.carrying = ''
    this.jump()
    // this.draw() // if not jumping
    if (this.job !== 'idle') {
      this.destCoords = randomIntFromTuple(this.coords.job)
      this.task = 'work'
    }
    else {
      this.task = 'idle'
    }
  }
}
