const initStyle = document.querySelector("nav").style

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
        document.querySelector("#moon").style.opacity = "0%"
        document.querySelector("#sun").style.opacity = "100%"
      }
      else
      {
        root.style.setProperty("--base1", "#1b1b1b")
        root.style.setProperty("--base2", "#272727")
        root.style.setProperty("--opp", "#f5f5f5")
        document.querySelector("#moon").style.opacity = "100%"
        document.querySelector("#sun").style.opacity = "0%"
      }
  })

document.querySelectorAll(".logo")[0].addEventListener('click', () => {
    window.scrollTo(top)
})