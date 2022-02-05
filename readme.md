# Boilerlate to setup a reveal.js presentation



Features


- relativley inserting of images
- snippets
- Live reload

CSS



Prerequisite: VS Code



## How-to

1. Download the project
2. Run `npm install`
3. Install the suggested extension, grabbed from `package.json`
4. Copy the content of `snippets.json` in your VS Code settings. The easiest way is to do Ctrl+Shift+P, type 'configure snippet', choose asciidoc and paste the snippets.
   1. Every time you save, the presentation is generated, thanks to the Run on Save extension and its settings in the `.code-workspace` file To see the result, just open index.html
5. To preview changes without reloading the browser, launch the Live Server extension