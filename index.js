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
        let sun_mid = document.querySelector('main > .sunflower-mid')
        bg.classList.add('animate__fadeInUp')
        sun_mid.classList.add('active')
        sky.classList.add('active')
        $btn.classList.add('hide')
    })
});
