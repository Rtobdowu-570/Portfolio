"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Typewriter =
/*#__PURE__*/
function () {
  function Typewriter(txtElement, words) {
    var wait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;

    _classCallCheck(this, Typewriter);

    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  _createClass(Typewriter, [{
    key: "type",
    value: function type() {
      var _this = this;

      // get current word index 
      var current = this.wordIndex % this.words.length; // get full word length

      var fullTxt = this.words[current]; //check if is deleting 

      if (this.isDeleting) {
        //remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      }

      if (!this.isDeleting) {
        // add char 
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      } // insert txt into element


      this.txtElement.innerHTML = "<span class=\"text\">".concat(this.txt, "</span>"); // initial speed 

      var typeSpeed = 300; // if deleting

      if (this.isDeleting) {
        typeSpeed /= 2;
      } // check if word is complete 


      if (!this.isDeleting && this.txt === fullTxt) {
        // pause at end 
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false; //move to next word 

        this.wordIndex++; // pause before start typing 

        typeSpeed = 500;
      }

      setTimeout(function () {
        return _this.type();
      }, typeSpeed);
    }
  }]);

  return Typewriter;
}();

var ProgressBar =
/*#__PURE__*/
function () {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    this.progress = document.querySelectorAll('.skill-progress');
    this.initializeWidth();
  }

  _createClass(ProgressBar, [{
    key: "initializeWidth",
    value: function initializeWidth() {
      this.progress.forEach(function (progress) {
        // get width
        var width = progress.getAttribute('data-width'); // set width 

        progress.style.width = "".concat(width, "%"); // set color 

        progress.style.background = 'linear-gradient(to right, var(--color-primary), var(--color-secondary))';
      });
    }
  }]);

  return ProgressBar;
}(); // Event listeners


document.addEventListener('DOMContentLoaded', init);

function init() {
  var txtElement = document.querySelector('.text');
  var words = JSON.parse(txtElement.getAttribute('data-words'));
  var wait = txtElement.getAttribute('data-wait');
  new Typewriter(txtElement, words, wait); // initialize progress bar

  new ProgressBar();
}
//# sourceMappingURL=script.dev.js.map
