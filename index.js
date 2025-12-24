let inputBtn = document.getElementById("input-btn") 

const myLead = []
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
     renderLeads()
     clearInput()
    })
    function renderLeads(){
   let listItem = ""
    for(let i= 0; i<myLead.length; i++){
        listItem += "<li> <a href = '#' target='_blank'>"+ myLead[i] + "</a></li>"
     ulEl.innerHTML = listItem
    }
}

function clearInput(){
    const clearfield = document.getElementById("input-el")
    clearfield.value = " "
}