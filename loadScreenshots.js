document.addEventListener("DOMContentLoaded", function () {
	const screenshotsFolder = "screenshots/"
	const screenshotsContainer = document.getElementById("screenshots")
	const screenshotFiles = [
		{ file: "1.png", title: "ANONIM TOOL - Only Windows OS support" },
		{ file: "2.png", title: "ANONIM TRMX - Only Termux support" },
	]

	screenshotFiles.forEach(function (item) {
		const container = document.createElement("div")
		container.classList.add("screenshot-container")

		const title = document.createElement("div")
		title.classList.add("screenshot-title")
		title.textContent = item.title

		const img = document.createElement("img")
		img.src = screenshotsFolder + item.file
		img.alt = item.title
		img.classList.add("screenshot")

		container.appendChild(title)
		container.appendChild(img)
		screenshotsContainer.appendChild(container)
	})
})
