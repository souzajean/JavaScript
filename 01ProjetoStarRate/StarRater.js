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
     //rater.addEventListener('')

     return rater
 }

 createStars() {
     const createStar = (_,id) => {
         const star = document.createElement('span')
         star.classList.add('star') 
         star.setAttribute('data-value',Number(id) +1)
         star.innerHTML = '&#9733;'
         star.addEventListener('click', (this.setRating.bind(this))
             
         )
         return star
     }
     return Array.from({ length:5}, createStar)
 } 

setRating(event) {
    this.setAttribute('data-rating', event.target.getAttribute('data-value'))
}

styles() {
     const style = document.createElement('style')
     style.textContent = `
     .star-rater {
         background-color: #0f0;
         .star{
            font-size: 10rem;
            color: gray;
            cursor: pointer;

         }
     }
     `
     return style 
 }

 }

 customElements.define('star-rater',StarRater)