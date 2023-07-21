# Boilerplate to setup an Asciidoc/Reveal project



Writing a full [Reveal.js](https://revealjs.com/) presentation in a separate file with the [Asciidoc](https://docs.asciidoctor.org/reveal.js-converter/latest/) format is great, but I found the documentation incomplete and the setup a bit painful.

So here is a simple boilerplate for a better author experience (AX :-3 ). Designed with VS Code in mind.


## Basic demo of the result

[Please this way.](https://baptiste-roullin.github.io/boilerplate-asciidoc-revealjs/)


## Features


- Preset global parameters
- Plugins pre-installed: navigation menu (`M` key to open) and full-text search (`Ctrl+Shift+F`)
- Some snippets
- Live reload
- A simple theme borrowed from [here](https://revealjs-themes.dzello.com/robot-lung.html#), with some tweaks and simplifications.


## How-to

1. Download the project.
2. Run `npm install`.
3. Install the suggested extensions in VS Code, grabbed from the `.code-workspace` file.
4. Every time you save, the presentation is generated, thanks to the Run on Save extension and its settings in the `.code-workspace` file.
5. To see the result, just open index.html.

## Preview

* For a full preview, launch the Live Server extension.
* For a quick preview without full style and Reveal-specific syntax, use the command `AsciiDoc: Open Preview to the Side`.


## Snippets

- `img`: insert insert image path with proper markup. steps:
  1. type `/images` , hit ctrl+Space to run the path auto-complete and select the file you want
  2. Ctrl+L to select the line
  3. Launch the snippet.
- `note` : Add a presenter note block.
- `cols` : Add  a slide with two columns equal in size, using [this feature](https://docs.asciidoctor.org/reveal.js-converter/latest/converter/syntax/layout/#columns-layout).
- `cols-subh` : Add  a slide with a subheading and two columns beneath.

## Know issues

- The search plugin inside slides works very unpredictably with diacritics. So if you're in that weird tiny minority: _déso_ and sorry about that.
- CSS: Some potential overlap issues with big pictures.
