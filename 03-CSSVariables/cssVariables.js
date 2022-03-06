// gets all the inputs
const inputs = document.querySelectorAll('.controls input')

function handleUpdate(){
  // gets the suffix from the data attribute on the input
    const suffix = this.dataset.sizing || '';
  // updates the style property using the elements name, value and suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

//  for each of the inputs add an event listener
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))