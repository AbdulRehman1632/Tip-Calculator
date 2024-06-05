
let bill=document.querySelector("#bill");
let tip=document.querySelector("#tip");
let total=document.querySelector("#total");

function tip_calculator(){

let billinput=bill.value
let tipinput=tip.value
let totalinput=Math.round((billinput * tipinput)/100)

total.innerText =`Total: ${totalinput} Rs/=`

}

