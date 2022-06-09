const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
       event.preventDefault();
       const input = document.querySelector('input#searchByID');
    //   This also works to grab the user input:
    //  console.log(event.target.children[1].value); 
        console.log(input.value);
        fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    }); 
}




document.addEventListener('DOMContentLoaded', init);
// console.log('DOMContentLoaded');