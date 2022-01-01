const btn = document.querySelector('#myBtn')
const spoiler = document.querySelector('.closed')


btn.addEventListener('click', openSpoiler)


function openSpoiler(){
    spoiler.style.display = 'block';
    attach()
}

function attach(){
    btn.removeEventListener('click', openSpoiler)
    btn.addEventListener('click', closeSpoiler);
    document.addEventListener('keydown', handEsc);

}

function handEsc(event){
    if(event.key === 'Escape'){
        closeSpoiler();
    }
}

function closeSpoiler() {
    spoiler.style.display = 'none';
    deattach();
}


function deattach(){
    btn.removeEventListener('click', closeSpoiler);
    btn.addEventListener('click', openSpoiler)
    document.removeEventListener('keydown', handEsc);
}

