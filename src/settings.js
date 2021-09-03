let settings = {
  hasTraveled: false
}

const resetSettings = () => {
  settings.moveMod = 1
  settings.workMod = 0
  settings.workSpeed = 250
  settings.resourceMod = 0
}

resetSettings()

export { settings, resetSettings }