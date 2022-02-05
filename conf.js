if (!document.querySelector(".line-wrapper")) {
	let el = document.createElement("div")
	el
		.classList
		.add("line-wrapper")

	el.innerHTML = `
			<div class="line top"></div>
			<div class="line bottom"></div>
			<div class="line left"></div>
			<div class="line right"></div>`

	document
		.body
		.append(el)
}

Reveal.configure({
	progress: false,
	menu: {
		openButton: false,
		markers: false,
		hideMissingTitles: true,
	}
})
Reveal.registerPlugin(RevealMenu)
Reveal.registerPlugin(RevealSearch)

