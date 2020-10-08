//select all the inputs
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//able to use forEach on nodelist items
inputs.forEach(input => input.addEventListener('change', handleUpdate));

//when value is moved-also triggering a change
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//data set is an object that will contain all the data attributes from that specific element
