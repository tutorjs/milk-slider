# Milk Slider

[![GitHub issues](https://img.shields.io/github/issues/tutorjs/milk-slider.svg)](https://github.com/tutorjs/milk-slider/issues)
[![GitHub forks](https://img.shields.io/github/forks/tutorjs/milk-slider.svg)](https://github.com/tutorjs/milk-slider/network)
[![GitHub stars](https://img.shields.io/github/stars/tutorjs/milk-slider.svg)](https://github.com/tutorjs/milk-slider/stargazers)


milk slider is a simple slider like a milk.

### Install via npm or yarn

```bash
  
  yarn add milk-slider // yarn
  npm install milk-slider // npm
  
```

Please add CSS via CDN in your document HTML `https://cdn.rawgit.com/tutorjs/milk-slider/cde46831/src/css/milkslider.css`.

```javascript

  var MILKSlider = require('milk-slider');

  MILKSlider({
    target: '.gallery',
    width: 400
  });

```

### Install via CDN

```
  // CSS
  https://cdn.rawgit.com/tutorjs/milk-slider/cde46831/src/css/milkslider.css

  // Javascript
  https://cdn.rawgit.com/tutorjs/milk-slider/cde46831/src/js/milkslider.js

```

### Getting Started

#### HTML

```html
<div class="gallery">
  <img src="path/to/your/directory" alt="image">
  <img src="path/to/your/directory" alt="image">
  <img src="path/to/your/directory" alt="image">
</div>

```
#### Javascript

```javascript

new MILKSlider({
  target: '.gallery',
  width: 400
})

```


### Demo

[Demo](https://tutorjs.github.io/milk-slider)

Thanks.