const task = document.querySelector('#task')
let list = document.querySelector('#list')
let focs = document.querySelector('#liveToastBtn')

//// kaldırma butonu eklnemesi 

document.querySelectorAll("#list > li").forEach((element) => { 
  let deleteBtn =document.createElement("button"); 
  deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`; 
  deleteBtn.classList.add("removeBtn") 
  element.appendChild(deleteBtn); 
  deleteBtn.addEventListener("click" , removeElement); 
  
});

// butonun kaldırma işlemi yapması için fonksiyon 

function removeElement() {
    this.parentElement.remove();

}



document.querySelectorAll("#list > li").forEach((element) => {
   element.addEventListener("click",() => {
    element.classList.toggle("done")
   })

})

function newElement() {
    if (task.value.length > 0 && task.value != "hiçbir şey") { 
        let liDOM = document.createElement('li'); 
        liDOM.innerHTML = `${task.value}` 
        list.appendChild(liDOM) 
        $('.success').toast("show") 
        let deleteBtn = document.createElement("button"); 
        deleteBtn.classList.add("removeBtn") 
        liDOM.appendChild(deleteBtn); 
        deleteBtn.addEventListener("click", removeElement); 
        deleteBtn.addEventListener("click", removeStorage); 
        addStorage() 
        
        liDOM.addEventListener("click", () => {
            liDOM.classList.toggle("done")
          })
        }



else  {
    $('.error').toast("show") 
    
}

}
task.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
    focs.click()
   }

})



focs.addEventListener("click", () => {
   task.focus()

})

let localArray;

if (localStorage.getItem("livalue")) {
   localArray= JSON.parse(localStorage.getItem("livalue"))

} else {
    localArray = [];
}

function addStorage() {
    localArray.push(yask.value);
    localStorage.setItem("liValue", JSON.stringify (localArray))

}
localArray.forEach((element) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = element;
    list.appendChild(liDOM)

    let deleteBtn= document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
    deleteBtn.classList.add("removeBtn")
    liDOM.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", removeElement); 
    deleteBtn.addEventListener("click", removeStorage);

    liDOM.addEventListener("click", () => {
        liDOM.classList.toggle("done")
      })
    })

    function removeStorage() {
        let indexNo= localArray.indexOf(this.parentElement.textContent) 
        localArray.splice(indexNo,1)
        localStorage.setItem("livalue",JSON.stringify(localArray))
        }