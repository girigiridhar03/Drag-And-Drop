const lists = document.querySelectorAll(".list");
const left = document.querySelector('.left');
const right = document.querySelector('.right');


lists.forEach(list=>{
    list.addEventListener("dragstart",(e)=>{
         let selected = e.target;

         right.addEventListener("dragover",(e)=>{
            e.preventDefault();
         })
         right.addEventListener("drop",()=>{
             right.append(selected);
             selected = "";
         })
         left.addEventListener("dragover",(e)=>{
            e.preventDefault();
         })
         left.addEventListener("drop",()=>{
             left.append(selected);
             selected = "";
         })
    })
})