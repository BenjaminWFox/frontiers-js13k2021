## Frontiers | A Tiny JavaScript Game for JS13K Games 2021

### Getting started

`git clone https://github.com/BenjaminWFox/js13k-webpack-starter-2020.git`

`cd js13k-webpack-starter-2020`

`npm install`

`npm run develop`

http://localhost:8080/

### Scripts

- `develop`: Starts the webpack dev server on http://localhost:8080/
- `build`: Creates a compact, minified build in `/dist`
- `lint`: Runs eslint to check for errors. Better to set this up in your IDE to check automatically on save.

### Boilerplate

There are some files & code included as examples of function & syntax that are not meant to be included in the final bundle. You can basically remove everything from the files listed below, but the largest chunks are: 

- `index.js` - the `.scss` and `.png` import
- `main.scss` - the `.png` `background-image`
- `index.html` - the `<img>` tag
- These 3 images are in `assets/images/sprites` and can also be deleted

### js13k specific files

None of these files are included in your final bundle.

- `manifest.json` - The metadata file used when submitting your final game
- `image_large.png` - The large image that shows on the game detail page
- `image_thumbnail.png` - The thumbnail preview image that shows on the games gallery page