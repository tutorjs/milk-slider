/**
* ---------------------------------------------------------
* MILKSlides
* ---------------------------------------------------------
* Simple Slides Create With VanillaJS
* Author: Adiatma Kamarudin <adiatma9024@gmail.com>
*/

;(function (root, factory) {
  root.MILKSlider = factory();
})(this, function () {

  // Selector Element
  function el(element) {
    return document.querySelector(element);
  };

  // Find Children Selector In Element
  function findChildren(element, selector) {
    return element.querySelectorAll(selector);
  };

  // Create Slide
  function createSlide(index) {
    var slide = document.createElement('div');

    slide.classList.add('slide');
    slide.classList.add('fade');

    slide.setAttribute('data-index', index);

    return slide;
  }

  // Create Wrap Image To Slide
  function wrapImageToSlide(imageEls, width) {
    // Create Document Fragment 
    var slideFragment = document.createDocumentFragment();

    Array.prototype.forEach.call(imageEls, function(element, index){
      var slide = createSlide(index);

      element.setAttribute('style', 'width: ' + width + 'px;');
      slide.appendChild(element);
      slideFragment.appendChild(slide);
    });

    return slideFragment;
  }

  // Default Width
  var DEFAULT_WIDTH = 1020;

  // Object Slides
  function Slides(options) {

    this.options = Object.assign({}, options, {
      width: options.width || DEFAULT_WIDTH
    })

    this.currentIndex = 1;

    // Method Render
    this.render();

  };

  // Method Render
  Slides.prototype.render = function render() {
    
    // Select Target Selector
    var target = el(this.options.target);
    this.target = target;

    // Find Image In Target Selector
    var images = findChildren(target, 'img');

    // Add Class Slides To Target Selector
    target.classList.add('slides');
    
    // Add Style To Target Selector
    target.style = 'width:' + this.options.width + 'px; margin: 0 auto; position: relative;';
    
    // Create Slide Images
    var slideImages = wrapImageToSlide(images, this.options.width);

    // Append Silde Images To Target Selector
    target.appendChild(slideImages);

    // Find Class `.slide`
    this.slide = findChildren(this.target, '.slide');

    // Init Move slides
    this.moveSlides(this.currentIndex);

    // Create Navigation
    var Navigation = this.createNavigation();

    target.appendChild(Navigation);

  };

  // Create Navigation
  Slides.prototype.createNavigation = function createNavigation() {
    var divFragment = document.createDocumentFragment();

    var prevNav = document.createElement('a');
    var nextNav = document.createElement('a');

    prevNav.classList.add('prev__nav');
    nextNav.classList.add('next__nav');

    prevNav.innerHTML = '&#10094;';
    nextNav.innerHTML = '&#10095;';

    prevNav.addEventListener('click', this.prev.bind(this));
    nextNav.addEventListener('click', this.next.bind(this));

    divFragment.appendChild(prevNav);
    divFragment.appendChild(nextNav);

    return divFragment;

  };

  // Navigation prev
  Slides.prototype.prev = function prev() {
    var n = this.currentIndex += -1;
    this.moveSlides(n);
  };

  // Navigation next
  Slides.prototype.next = function next() {
    var n = this.currentIndex += 1;
    this.moveSlides(n);
  };

  // Move Slides
  Slides.prototype.moveSlides = function moveSlides(n) {

    if ( n < 1 ) {
      this.currentIndex = this.slide.length;
    }

    if ( n > this.slide.length ) {
      this.currentIndex = 1;
    }

    for ( var i = 0; i < this.slide.length; i++ ) {
      this.slide[i].style.display = 'none';
    }

    this.slide[ this.currentIndex -1 ].style.display = 'block';
  
  };

  return Slides;

});
