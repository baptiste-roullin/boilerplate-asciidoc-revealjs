# Boilerplate to setup an Asciidoc/Reveal project



Writing a full [Reveal.js](https://revealjs.com/) presentation in a separate file with the [Asciidoc](https://docs.asciidoctor.org/reveal.js-converter/latest/) format is great, but I found the documentation incomplete and the setup process painful. 

So here is a simple boilerplate. Designed with VS Code in mind.

Features


- Better default global parameters
- Plugins pre-installed:  navigation menu (`M` key to lanch) and full-text search (`Ctrl+Shift+P`)
- Some snippets
- Live reload
- A simple theme borrowed from [here](https://revealjs-themes.dzello.com/robot-lung.html#), with some tweaks.



## How-to

1. Download the project.
2. Run `npm install`.
3. Install the suggested extensions, grabbed by VS Code from `package.json`.
4. Copy the content of `snippets.json` in your VS Code settings. The easiest way to do this is : Ctrl+Shift+P, type 'configure snippet', choose asciidoc and paste the snippets.
5. Every time you save, the presentation is generated, thanks to the Run on Save extension and its settings in the `.code-workspace` file. 
6. To see the result, just open index.html.
7. To preview changes without reloading the browser, launch the Live Server extension.



## Snippets

- `img`: Add and image. steps: type `/images` , use the path autocompletion plugin  to insert an  image from the images folder, select the path, then launch the snippet. The result shows only the file name, since the global paramater `imagesdir` is set to `/images`. Yeah, that's the easiest workflow I could think of.
- `note` : Add a presenter note block.
- `cols` : Add  a slide with two columns equal in size, using [this feature](https://docs.asciidoctor.org/reveal.js-converter/latest/converter/syntax/layout/#columns-layout).
- `cols-subh` : Add  a slide with a subheading and two columns beneath.