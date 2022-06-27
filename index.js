var searchCars = function(cars, searchName){
    input = searchName.toLowerCase();
    
    for (var i = 0; i < cars.length; i++) { // Estrutura de repetição que passa por todo elemento para garantir a exatidão da comparação.
        if (!cars[i].textContent.toLowerCase().includes(input)) {
            cars[i].parentElement.parentElement.style.display="none"; /*Caso o texto digitado não seja correspondente a constastante "cars", não é executado nada*/
        }else {
            cars[i].parentElement.parentElement.style.display="flex"; /*Caso o elemento seja igual ele atualiza o display e mostra o carro*/                
        }
    };
};

const cars = document.querySelectorAll('.car-name'); /* Criação de variavel da classe .car-name.*/
const searchElement = document.querySelector('.search-import'); /* atribuição de valor a classe .search-import*/

searchElement.addEventListener('change', (event) => searchCars(cars, searchElement.value)); // O evento chama a função.
