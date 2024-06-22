document.addEventListener("DOMContentLoaded", function () {
	const screenshotsFolder = "screenshots/"
	const screenshotsContainer = document.getElementById("screenshots")
	const screenshotFiles = [
		"1.png",
		"2.png",
		"3.png",
	] 

	screenshotFiles.forEach(function (file) {
		const img = document.createElement("img")
		img.src = screenshotsFolder + file
		img.alt = file
		img.classList.add("screenshot")
		screenshotsContainer.appendChild(img)
	})
})
