var searchCars = function(cars, searchName){
    input = searchName.toLowerCase();
    
    for (var i = 0; i < cars.length; i++) {
        if (!cars[i].textContent.toLowerCase().includes(input)) {
            cars[i].parentElement.parentElement.style.display="none";
        }else {
            cars[i].parentElement.parentElement.style.display="flex";                 
        }
    };
};

const cars = document.querySelectorAll('.car-name');
const searchElement = document.querySelector('.search-import');

searchElement.addEventListener('change', (event) => searchCars(cars, searchElement.value));
