document.addEventListener('DOMContentLoaded', ()=>{
    let main_left = document.querySelector('main > .left')
    let main_right = document.querySelector('main > .right')
    let fragment_left = document.createDocumentFragment()
    let fragment_right = document.createDocumentFragment()

    for(let i = 0; i < 20; i++){
        let div = document.createElement('div')
        let img = document.createElement('img')
        img.src = 'images/sunflower.png'
        div.appendChild(img)
        div.classList.add('sunflower-left')
        div.style.top = `calc(${i}*(var(--sunflower-height) - 2rem))`
        fragment_left.appendChild(div)
        div = document.createElement('div')
        img = document.createElement('img')
        img.src = 'images/sunflower.png'
        div.appendChild(img)
        div.classList.add('sunflower-right')
        div.style.top = `calc(${i}*(var(--sunflower-height) - 2rem))`
        fragment_right.appendChild(div)
    }
    main_left.appendChild(fragment_left)
    main_right.appendChild(fragment_right)
})

document.getElementById('florBtn').addEventListener('click', () => {
    const $sunflowers = document.querySelectorAll('.sunflower-left, .sunflower-right');
    
    $sunflowers.forEach(e => {
        e.classList.add('active')
        let bg = document.querySelector('main > .bg')
        let sky = document.querySelector('main > .sky')
        let $btn = document.querySelector('main > #florBtn')
        let text = document.querySelector('main > .text')
        let sun_mid = document.querySelector('main > .sunflower-mid')
        bg.classList.add('animate__fadeInUp')
        sun_mid.classList.add('active')
        sky.classList.add('active')
        $btn.classList.add('hide')
        text.classList.add('active')
    })
});


const TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };