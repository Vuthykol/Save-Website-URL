let inputBtn = document.getElementById("input-btn")
let deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let myLead = []
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLead = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    if (inputEl.value === "") return
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    renderLeads()
})

function renderLeads() {
    let listItem = ""
    for (let i = 0; i < myLead.length; i++) {
        listItem += `<li><a href="${myLead[i]}" target="_blank">${myLead[i]}</a></li>`
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("click", function () {
    localStorage.removeItem("myLeads")
    myLead = []
    renderLeads()
})
