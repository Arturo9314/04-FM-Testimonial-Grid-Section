///Button
const animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    ///draggables boxes
    draggables.forEach( drag=>{
        drag.setAttribute('draggable', 'true')
    })
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

///main
const bubblyButtons = document.getElementsByClassName("bubbly-button"); 
const containers = document.querySelectorAll(".container")
const draggables = document.querySelectorAll(".card-name")

for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}
///swap 
draggables.forEach( card =>{
    card.addEventListener("dragstart", event=>{
        card.classList.add("dragging")
        event.dataTransfer.setData("id", card.id)
        const id_card = event.dataTransfer.getData("id")
    })
    card.addEventListener("dragend",()=>{
        card.classList.remove("dragging")
    })
})
containers.forEach( container =>{
    container.addEventListener("dragover", event=>{
        event.preventDefault()
        console.log("DragoOver");
        event.dataTransfer.dropEffect = "link" //copy por
    })
    container.addEventListener("drop", event=>{
        console.log("Drop");
        const id_card = event.dataTransfer.getData("id")
        const card = document.getElementById(id_card)
        container.appendChild(card)
    })
})
