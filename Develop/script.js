var dateEl = $('#currentDay');
var curDate = dayjs()


let hours=[9,10,11,12,1,2,3,4,5]
function saveData(event) {
 event.preventDefault()
 console.log(event.target.previousElementSibling)
let textAreaElement;
if(event.target.tagName==="I") {
  textAreaElement = event.target.parentElement.previousElementSibling
  
}else if(event.target.tagName==="BUTTON") {
textAreaElement = event.target.previousElementSibling
}
let key= textAreaElement.getAttribute("id")
let value= textAreaElement.value
console.log(key,value)
localStorage.setItem(`${key}`, `${value}`)
console.log(textAreaElement)


}
function getData() {
  for (let i = 0; i < hours.length; i++) {
    let id = hours[i]
    document.getElementById(`${id}`).value = localStorage.getItem(`${id}`)

  }
}
getData()
