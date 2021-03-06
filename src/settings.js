let settings = {
  hasTraveled: false,
  moreTypes: false,
  firstPress: false,
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
  settings.upgraded = false
}

resetSettings()

export { settings, resetSettings }
