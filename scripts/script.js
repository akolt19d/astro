const initStyle = document.querySelector("nav").style
const animation = document.querySelectorAll(".animation")
const animation2 = document.querySelectorAll(".animation2")

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight && window.innerWidth > 800)
    {
        let a =  document.querySelectorAll("nav a")
        document.querySelector("nav").style.backgroundColor = "var(--base1)"
        document.querySelector("nav").style.boxShadow = "0 0 5px 0 rgba(0, 0, 0, 0.25)"
        document.querySelector("nav").style.color = "var(--opp)"
        for(let i = 0; i < a.length; i++)
            document.querySelectorAll("nav a")[i].style.color = "var(--opp)" 
    }
    else
    {
        let a =  document.querySelectorAll("nav a")
        document.querySelector("nav").style = initStyle
        for(let i = 0; i < a.length; i++)
            document.querySelectorAll("nav a")[i].style.color = "#f5f5f5" 
    }

    let scrollHeight = window.scrollY

    if(window.innerWidth > 800)
    {
        document.querySelector("#jupiter").style.left = `${550 + scrollHeight * 0.35}px`
        document.querySelector("#jupiter").style.bottom = `${80 + scrollHeight * 0.2}px`
    }
    else 
    {
        document.querySelector("#jupiter").style.left = `${100 + scrollHeight * 0.35}px`
        document.querySelector("#jupiter").style.bottom = `${20 + scrollHeight * 0.2}px`
    }
    document.querySelector("#uranus").style.left = `${150 - scrollHeight * 0.3}px`
    document.querySelector("#uranus").style.top = `${scrollHeight * 0.2}px`
    //console.log(`${1 + scrollHeight * 0.05}`)
}) 

particlesJS.load('banner', './scripts/particlesjs.json', function() {
    console.log('callback - particles.js config loaded');
  });

  document.querySelector("#mode").addEventListener('change', (e) => {
      const root = document.querySelector(":root")

      if(e.currentTarget.checked)
      {
        root.style.setProperty("--base1", "#f5f5f5")
        root.style.setProperty("--base2", "#272727")
        root.style.setProperty("--opp", "#1b1b1b")
        root.style.setProperty("--orange", "#fd7a4b")
        root.style.setProperty("--blue", "#78e9e9")
        document.querySelector("#moon").style.opacity = "0%"
        document.querySelector("#sun").style.opacity = "100%"
      }
      else
      {
        root.style.setProperty("--base1", "#1b1b1b")
        root.style.setProperty("--base2", "#272727")
        root.style.setProperty("--opp", "#f5f5f5")
        root.style.setProperty("--orange", "#ff632a")
        root.style.setProperty("--blue", "#55e4e4")
        document.querySelector("#moon").style.opacity = "100%"
        document.querySelector("#sun").style.opacity = "0%"
      }
  })

document.querySelectorAll(".logo")[0].addEventListener('click', () => {
    window.scrollTo(top)
})

for(let i = 0; i < 5; i++)
{
    document.querySelectorAll(".image")[i].addEventListener('click', function(e){
        let template = document.querySelector("template")
        let clone = template.content.cloneNode(true)
        let imgNum = parseInt(e.currentTarget.id[e.currentTarget.id.length-1])
        
        document.querySelector("body").append(clone)
        let preview = document.querySelector(".preview")
        switch (imgNum) {
            case 1:
                preview.setAttribute("src", "./images/gallery/pexels-wendy-wei-2753432-min.jpg")
                preview.alt = "Piękne zdjęcie przedtawiające pasmo komet PJKP-21"
                break;
            case 2:
                preview.src = "./images/gallery/pexels-tobias-bjørkli-1938348-min.jpg"
                preview.alt = "Zdjęcie przedstawiające wspaniale uchwyconą zorze polarną"
                break;
            case 3:
                preview.src = "./images/gallery/pexels-pixabay-33684-min.jpg"
                preview.alt = 'Astronauta Mike Hock robiący sobie "selfie"'
                break;
            case 4:
                preview.src = "./images/gallery/pexels-nandkumar-patel-3542314-min.jpg"
                preview.alt = "Ekstremalnie przybliżona gwiazda Mogus-006C"
                break;
            case 5:
                preview.src = "./images/gallery/pexels-mikhail-nilov-7672252-min.jpg"
                preview.alt = "Astronautka Julie Peltz przygotowana do opuszczenia naszej atmosfery"
                break;
            default:
                break;
        }
        preview.addEventListener('click', (e) => { document.querySelector(".preview-wrapper").remove() })
        // e.currentTarget.style.backgroundImage = "url(./images/gallery/masked_wolf.png)"
    })
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        e.target.classList.toggle("play", e.isIntersecting)
        if(e.isIntersecting)
        {
            observer.unobserve(e.target)
        }
    })
}, {
    threshold: 0.6,
})

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
        e.target.classList.toggle("play2", e.isIntersecting)
        if(e.isIntersecting)
        {
            observer2.unobserve(e.target)
        }
    })
}, {
    threshold: 0.8,
})

animation.forEach(e => {
    observer.observe(e)
})

animation2.forEach(e => {
    observer2.observe(e)
})

function verifyName(string)
{
    let temp = string.slice(1, string.length)
    let char = string[0]
    temp = temp.toLowerCase()
    char = char.toUpperCase()

    return char+temp;
}

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault()
    let inp = document.querySelectorAll(".inputs")

    let i1 = inp[0].value;
    let i2 = inp[1].value;

    let i1new =  verifyName(i1)
    let i2new = verifyName(i2)

    inp[0].value = i1new
    inp[1].value = i2new
})