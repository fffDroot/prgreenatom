var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        this.tries -= 1;
        if (this.tries >= 0){
            if(guessedAnswer.toLowerCase() == this.correctAnswer.toLowerCase()) {
                alert('Correct answer')
                this.tries = -1;
            }
            else if(guessedAnswer.toLowerCase() != this.correctAnswer.toLowerCase()){
            alert('incorrect answer')}
            if(this.tries == 1){
                alert('Подсказка: лампочка')
            }
        }
        else{alert('Game over')}
        
    },
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer);
        
    }
}