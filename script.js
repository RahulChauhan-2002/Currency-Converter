const Base_URL="https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api"

const dropdown = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");

const currFrom=document.querySelector(".from select");
const currTo=document.querySelector(".to select");

const msg=document.querySelector(".msg");

for (let select of dropdown) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } 
        else if (select.name === "To" && currCode === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}


const updateFlag=(element)=>{
    let currcode=element.value
    let countryCode=countryList[currcode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;

}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".amount input");
    let amtVal=amt.value;
    if(amtVal==="" || amtVal<1)
    {
        amtVal=1;
        amt.value="1";
    }
    console.log(currFrom.value);
    console.log(currTo.value)
    const url=`${Base_URL}/${currTo.value}_${currFrom.value}.json`;
    
    let response=await fetch(url);
    let data=await response.json();
    let rate=data.rate*amtVal;
    console.log(rate)
    const final_amount=`${amtVal} ${currFrom.value} = ${rate} ${currTo.value}`;
    msg.innerText=final_amount;
});



