let currentMessage = ""
let fakeAchievement = ""
let color = "FFFFFF"
let message = ""
let targetName = ""
let fakeItem = ""
let itemColor

const formatter = "XXXXXXX"
const resetter = ""
const achievementColor = "9ec34f"

// Back buttons go to start page
document.querySelectorAll(".backButton").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen("startPage")
  })
})

// Message constructors
function constructTrollMessage() {
  currentMessage = formatter + color + targetName + resetter + " : " + message
}
function constructFakeTrollAchievementMessage() {
  constructFakeAchievementMessage()
  currentMessage =
    formatter + color + targetName + " " + resetter + currentMessage
}
function constructFakeAchievementMessage() {
  currentMessage =
    "has earned the achievement " +
    formatter +
    achievementColor +
    fakeAchievement
}

function constructFakeItemMessage() {
  if (
    document.getElementById("rarityDropdown").selectedOptions[0].value ==
    "custom"
  ) {
    itemColor = document.getElementById("rarityColor").value.slice(1)
  } else {
    itemColor =
      document.getElementById("rarityDropdown").selectedOptions[0].value
  }
  const itemMethod =
    document.getElementById("methodDropdown").selectedOptions[0].value
  currentMessage = itemMethod + formatter + itemColor + fakeItem
}
function constructFakeTrollItemMessage() {
  if (
    document.getElementById("trollRarityDropdown").selectedOptions[0].value ==
    "custom"
  ) {
    itemColor = document.getElementById("trollRarityColor").value.slice(1)
  } else {
    itemColor = document.getElementById("trollRarityDropdown")
      .selectedOptions[0].value
  }
  const itemMethod = document.getElementById("trollMethodDropdown")
    .selectedOptions[0].value
  currentMessage =
    formatter +
    color +
    targetName +
    resetter +
    " " +
    itemMethod +
    formatter +
    itemColor +
    fakeItem
}

// Page navigation
function setScreen(id) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none"
  })
  document.getElementById(id).style.display = "block"
}

function showElement(id) {
  document.getElementById(id).style.display = "block"
}

function hideElement(id) {
  document.getElementById(id).style.display = "none"
}

// Main nav buttons
document.getElementById("nameTrollButton").addEventListener("click", () => {
  setScreen("nameTrollPage")
})
document
  .getElementById("fakeAchievementButton")
  .addEventListener("click", () => {
    setScreen("fakeAchievementPage")
  })
document.getElementById("fakeItemButton").addEventListener("click", () => {
  setScreen("fakeItemPage")
})
document.getElementById("customButton").addEventListener("click", () => {
  setScreen("customPage")
})

// Troll message section switching
document.getElementById("trollMessageButton").addEventListener("click", () => {
  showElement("sendMessageAsTroll")
  hideElement("unlockAchievementAsTroll")
  hideElement("getItemAsTroll")
})

document
  .getElementById("trollAchievementButton")
  .addEventListener("click", () => {
    hideElement("sendMessageAsTroll")
    showElement("unlockAchievementAsTroll")
    hideElement("getItemAsTroll")
  })

document.getElementById("trollItemButton").addEventListener("click", () => {
  hideElement("sendMessageAsTroll")
  hideElement("unlockAchievementAsTroll")
  showElement("getItemAsTroll")
})

// Inputs and previews
document.getElementById("targetName").addEventListener("input", () => {
  targetName = document.getElementById("targetName").value
  document.querySelectorAll(".target").forEach((el) => {
    el.textContent = targetName
  })
})

document.getElementById("fakeMessage").addEventListener("input", () => {
  message = document.getElementById("fakeMessage").value
  document.getElementById("fakeText").textContent = message
  constructTrollMessage()
})

document.getElementById("achievementName").addEventListener("input", () => {
  fakeAchievement = document.getElementById("achievementName").value
})
document
  .getElementById("trollAchievementName")
  .addEventListener("input", () => {
    fakeAchievement = document.getElementById("trollAchievementName").value
  })

document.getElementById("itemNameInput").addEventListener("input", () => {
  fakeItem = document.getElementById("itemNameInput").value
  document.getElementById("previewItem").textContent = fakeItem
  document.getElementById("previewItem").style.color =
    "#" + document.getElementById("rarityDropdown").selectedOptions[0].value
})
document.getElementById("trollItemNameInput").addEventListener("input", () => {
  fakeItem = document.getElementById("trollItemNameInput").value
  document.getElementById("previewTrollItem").textContent = fakeItem
  document.getElementById("previewTrollItem").style.color =
    "#" +
    document.getElementById("trollRarityDropdown").selectedOptions[0].value
})

document.getElementById("methodDropdown").addEventListener("change", () => {
  const selected = document.getElementById("methodDropdown").selectedOptions[0]
  document.getElementById("methodText").textContent = selected.dataset.method
  document.getElementById("previewMethod").textContent = selected.value
})
document
  .getElementById("trollMethodDropdown")
  .addEventListener("change", () => {
    const selected = document.getElementById("trollMethodDropdown")
      .selectedOptions[0]
    document.getElementById("trollMethodText").textContent =
      selected.dataset.method
    document.getElementById("previewTrollMethod").textContent = selected.value
  })

document.getElementById("rarityDropdown").addEventListener("change", () => {
  if (
    document.getElementById("rarityDropdown").selectedOptions[0].value ==
    "custom"
  ) {
    document.getElementById("rarityColor").style.display = "inline"
    document.getElementById("previewItem").style.color =
      document.getElementById("rarityColor").value
  } else {
    hideElement("rarityColor")
    document.getElementById("previewItem").style.color =
      "#" + document.getElementById("rarityDropdown").selectedOptions[0].value
  }
})

document
  .getElementById("trollRarityDropdown")
  .addEventListener("change", () => {
    if (
      document.getElementById("trollRarityDropdown").selectedOptions[0].value ==
      "custom"
    ) {
      document.getElementById("trollRarityColor").style.display = "inline"
      document.getElementById("previewTrollItem").style.color =
        document.getElementById("trollRarityColor").value
    } else {
      hideElement("trollRarityColor")
      document.getElementById("previewTrollItem").style.color =
        "#" +
        document.getElementById("trollRarityDropdown").selectedOptions[0].value
    }
  })

document.getElementById("rarityColor").addEventListener("change", () => {
  document.getElementById("previewItem").style.color =
    document.getElementById("rarityColor").value
})

document.getElementById("trollRarityColor").addEventListener("change", () => {
  document.getElementById("previewTrollItem").style.color =
    document.getElementById("trollRarityColor").value
})

// Copy buttons
document.getElementById("copyTrollBtn").addEventListener("click", () => {
  const copier = document.getElementById("hiddenCopyTrollText")
  constructTrollMessage()
  copier.value = currentMessage
  copier.select()
  document.execCommand("copy")
})

document.getElementById("copyAchievementBtn").addEventListener("click", () => {
  const copier = document.getElementById("hiddenCopyAchievementText")
  constructFakeAchievementMessage()
  copier.value = currentMessage
  copier.select()
  document.execCommand("copy")
})
document
  .getElementById("copyTrollAchievementBtn")
  .addEventListener("click", () => {
    const copier = document.getElementById("hiddenCopyAchievmentTrollText")
    constructFakeTrollAchievementMessage()
    copier.value = currentMessage
    copier.select()
    document.execCommand("copy")
  })

document.getElementById("copyItemBtn").addEventListener("click", () => {
  const copier = document.getElementById("hiddenCopyItemText")
  constructFakeItemMessage()
  copier.value = currentMessage
  copier.select()
  document.execCommand("copy")
})
document.getElementById("copyTrollItemBtn").addEventListener("click", () => {
  const copier = document.getElementById("hiddenCopyTrollItemText")
  constructFakeTrollItemMessage()
  copier.value = currentMessage
  copier.select()
  document.execCommand("copy")
})

// Color radio buttons
document.getElementById("customTeamColor").addEventListener("change", () => {
  const tempColor = document.getElementById("customTeamColor").value
	color = tempColor.slice(1);
  document.querySelectorAll(".target").forEach((el) => {
    el.style.color = tempColor
  })
})
document.querySelectorAll('input[name="color"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    color = document.querySelector('input[name="color"]:checked').value
    if (color == "custom") {
      document.getElementById("customColorBox").style.display = "inline"
      const tempColor = document.getElementById("customTeamColor").value
      document.querySelectorAll(".target").forEach((el) => {
        el.style.color = tempColor
      })
    } else {
		document.getElementById("customColorBox").style.display = "none"
      tempColor = "#" + color
      document.querySelectorAll(".target").forEach((el) => {
        el.style.color = tempColor
      })
    }
  })
})
