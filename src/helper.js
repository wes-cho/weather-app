export { degreeify, capitalize };

function degreeify(number){
    return String(number).split('.')[0] + '°';
}

function capitalize(string){
    return string.split(" ").map((word)=> {return word[0].toUpperCase()+ word.substring(1)}).join(" ");
};