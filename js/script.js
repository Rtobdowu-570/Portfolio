class Typewriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // get current word index 
        const current = this.wordIndex % this.words.length;

        // get full word length
        const fullTxt = this.words[current];

        //check if is deleting 
        if(this.isDeleting) {
            //remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }

        if(!this.isDeleting) {
            // add char 
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // insert txt into element
        this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

        // initial speed 
        let typeSpeed = 300;

        // if deleting
        if(this.isDeleting) {
            typeSpeed /= 2;
        }

        // check if word is complete 
        if(!this.isDeleting && this.txt === fullTxt) {
            // pause at end 
            typeSpeed = this.wait;

            this.isDeleting = true;

        }  else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;

            //move to next word 
            this.wordIndex++;

            // pause before start typing 
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
} 

class ProgressBar {
    constructor() {
        this.progress = document.querySelectorAll('.skill-progress');
        this.initializeWidth();
    }

    initializeWidth() {
        this.progress.forEach((progress) => {
            // get width
            const width = progress.getAttribute('data-width');

            // set width 
            progress.style.width = `${width}`;

            // set color 
            progress.style.background = 'linear-gradient(to right, var(--color-primary), var(--color-secondary))';

        })
    }
}


// Event listeners
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.text');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new Typewriter(txtElement, words, wait);

    // initialize progress bar
    new ProgressBar();
}