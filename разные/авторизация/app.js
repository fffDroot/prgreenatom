const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];


const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');

inputs.forEach(input => input.addEventListener('keypress', handleEvent))
form.addEventListener('submit', handleSubmit);

function handleEvent(event) {
    
    if(event.key === 'Enter'){
        event.preventDefault();
        event.target.nextElementSibling.focus();
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if(validate()){
        console.log('авторизация успешна')
        form.reset();
    }
    else{
        console.log('неправильный логин или пароль')
    }
}


function validate() {
    let isValid = true
    inputs.forEach(input => {
        if (!input.value.trim()){
            input.style.borderColor = 'red';
            isValid = false;
            alert('fields are required')
        } else{
            input.style.borderColor = 'black';
            
        };
    });
            key = 0
            for(i of registeredUsers){
                if((i[0] === inputs[0].value) && ((i[1] === inputs[1].value))){
                    key++
                };
            };
            if (key === 0){isValid = false};
    
   return isValid
}
