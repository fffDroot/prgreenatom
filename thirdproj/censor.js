function censor() {
    const cenArr = []

    return function(str1, str2 = ''){
        if (str2){
            cenArr.push([str1, str2]);
        }
        else{
            for(let p of cenArr){
                str1 = str1.replace(new RegExp(p[0], 'gi'), p[1])
            }
        }

        return str1;
    }
}


const changeScene = censor();

changeScene('PHP', 'JS');
console.log(changeScene('PHP is great'))