const dropdown = document.querySelectorAll(".dropdown select");

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
    console.log(element);
}