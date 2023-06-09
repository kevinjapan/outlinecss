



const init_fade_ins = () => {


   const faders = document.querySelectorAll('.fade_in')
   const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px"
   }
   return create_observers(faders,'appear',appearOptions)
}


const create_observers = (elements,active_class,options) => {

   let observers_created = false

   const appearOnScroll = new IntersectionObserver(
      function(entries,appearOnScroll){
         entries.forEach(entry => {
            if(!entry.isIntersecting) return
            entry.target.classList.add(active_class)
            appearOnScroll.unobserve(entry.target)
         })
   },options)

   if(elements) {
      elements.forEach(element => {
         appearOnScroll.observe(element)
      })
      observers_created = true
   }
   return observers_created
}

// const init_nav_behaviour = () => {

//    const nav = document.querySelector('.nav_bar')
//    const frontcover = document.querySelectorAll('.frontcover') // only interested in first one
   
//    const newOptions = {
//       threshold: 0,
//       rootMargin: "-400px 0px 0px 0px"
//    }

//    const modifyNav = new IntersectionObserver(
//       function(entries,modifyNav){
//          if(nav) {
//             entries.forEach(entry => {
//                if(!entry.isIntersecting) {
//                   nav.classList.remove('transparent-bg')
//                } else {
//                   nav.classList.add('transparent-bg')
//                }
//                //modifyNav.unobserve(entry.target)
//             })
//          }
//    },newOptions)
//    if(frontcover.length > 0) {
//       nav.classList.add('transparent-bg')
//       frontcover.forEach(frontcover => {
//          modifyNav.observe(frontcover)
//       })
//    }  
// }



let last_scroll_pos = 0

const init_nav_scroll_observer = () => {

   let last_scroll = 0 
   const nav_bar = document.querySelector('nav') // to do : tidy and naming...
   if(nav_bar) {
      window.addEventListener('scroll', () => {
         let current_scroll = window.scrollY
         if(current_scroll - last_scroll > 0) {
            nav_bar.classList.add('invisible_nav')
         }
         else {
            nav_bar.classList.remove('invisible_nav')
         }
         last_scroll = current_scroll
      })
   }
}

init_fade_ins()
init_nav_scroll_observer()
