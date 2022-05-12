/*==== CLOSE&OPEN THE COMMENTS CONATINER =====*/

let close_comments_btn = document.querySelector("#close_comments_btn")
let comments_container = document.querySelector(".comments_container")
let comment_btn = document.querySelectorAll("#comment_btn")


// CLOSE //
comment_btn.forEach(comment_btn=>{
 

close_comments_btn.addEventListener('click', ()=>{
  setTimeout(()=>{
    comments_container.style = "display: none"
  },300)
 setTimeout(() => {
      comments_container.style.opacity="0"
      comments_container.style.transform="scale(0.1)"
    },100)
})



// OPEN //
comment_btn.addEventListener('click', ()=>{
  setTimeout(()=>{
    comments_container.style="display: block"
  },200)
    setTimeout(() => {
    comments_container.style="display: block; opacity: 1; transform: scale(1.0)"
    },250)
})

})
