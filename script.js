const main = document.getElementById("main")



const tipValue = document.getElementById("tipValue")
const totalWithTip = document.getElementById("totalWithTip")


const billEach = document.getElementById("billEach")
const tipEach = document.getElementById("tipEach")


update()
main.addEventListener("input", update)

function update(){
  let temp, be
  let bill = document.getElementById("yourBill").value
  const tipInput = document.getElementById("tipInput").value
  const splitInput = document.getElementById("splitInput").value

  document.getElementById("tipPercent").textContent = `${tipInput}%`
  if(bill == ""){
    bill = 0
  }
  let tip = ((bill/100) * tipInput)
  tipValue.textContent = "$" + tip.toFixed(2)

  total = parseFloat(bill) + parseFloat(tip)
  totalWithTip.textContent = "$" + total.toFixed(2)
  

  let a = splitInput
  if(a == 1){
    document.getElementById("splitValue").innerText = "1 person"
  }
  else{
    document.getElementById("splitValue").innerText = `${a} people`
  }
  temp = tip/a
  be = temp.toFixed(2)
  tipEach.innerText = `$${be}`

  temp = bill/a
  be = temp.toFixed(2)
  billEach.innerText = `$${be}`
}
