const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('#results');

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);

    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight";
    } else {
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        if(BMI < 18.6){
            results.innerHTML = `<span>${BMI} : You are Under Weight</span>`
        }
        else if(BMI > 24.9){
            results.innerHTML = `<span>${BMI} : You are Over Weight</span>`
        }
        else{
            results.innerHTML = `<span>${BMI} : Result is normal</span>`
        }
    }
});
