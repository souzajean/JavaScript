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
    this.stars = this.createStars()

    //rater.appendChild(stars)
    this.stars.forEach(star => rater.appendChild(star))
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
         star.addEventListener('click', this.setRating.bind(this))
         star.addEventListener('mouseover', this.setRating.bind(this))
         
         return star
     }
     return Array.from({ length:5}, createStar)
 } 

setRating(event) {
    this.setAttribute('data-rating', event.target.getAttribute('data-value'))
}

ratingHover(event) {
    this.currentRatingValue = event.currentRatingValue.getAttribute('data-value')
    this.hightlightRating()
}

hightlightRating() {
    this.stars.forEach(star => {
        star.style.color = 
            this.currentRatingValue >= star.getAttribute('data-value') 
                ? 'yellow' 
                : 'gray'
           
    })
}

styles() {
     const style = document.createElement('style')
     style.textContent = `
     .star-rater {
         
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