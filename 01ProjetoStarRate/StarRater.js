 class StarRater extends HTMLElement {
     constructor() {
        super()
        this.build()
     }
 

 

 build() {
    const shadow = this.attachShadow({mode: 'open'})
    //shadow.innerHTML = `Hello from shadow!`
    shadow.appendChild(this.styles())

    const rater = this.createRater()
    const stars = this.createStars()

    //rater.appendChild(stars)
    stars.forEach(star => rater.appendChild(star))
    shadow.appendChild(rater)

 }
 
 createRater() {
     const rater = document.createElement('div')
     rater.classList.add(`star-rater`)
     return rater
 }

 createStars() {
     const createStar = (_,id) => {
         const star = document.createElement('span')
         star.classList.add('star') 
         star.setAttribute('data-value',Number(id) +1)
         star.innerHTML = '&#9733;'
         return star
     }
     return Array.from({ length:5}, createStar)
 }

styles() {
     const style = document.createElement('style')
     style.textContent = `
     .star-rater {
         background-color: #0f0;
     }
     `
     return style 
 }

 }

 customElements.define('star-rater',StarRater)