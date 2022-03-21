const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
    let between = false;
    // check for shift key & checking box
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{
            console.log(checkbox);
            // if this checkbox or the lastChecked then 
            // flip the between variable
            if (checkbox === this || checkbox === lastChecked){
                between = !between;
                console.log('flipping!');
            }
            // if true check the checkbox
            if (between){
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(input => {
    input.addEventListener('click', handleCheck);
});