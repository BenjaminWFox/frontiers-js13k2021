let settings = {
  hasTraveled: false
}

const resetSettings = () => {
  settings.moveMod = 1
  settings.workMod = 0
  settings.workSpeed = 250
  settings.resourceMod = 0
  settings.travelRight = .7
  settings.travelLeft = .7
  settings.home = 1
  settings.farm = 1
  settings.mine = 1
  settings.labs = 1
  settings.bridged = false
}

resetSettings()

export { settings, resetSettings }