
const stringSize = (text) => {
   
    return (parseInt(text.length) );

}
const replaceCharacterE = (text) => {
return(text.replace('e',' '))
}
const concatString = (text1, text2) => {
    return(text1+text2)
}
const showChar5 = (text) => {
    return(text[4])
}
const showChar9 = (text) => {
    return(text.slice(0,9))
}
const toCapitals = (text) => {
    return (text.toUpperCase())
}
const toLowerCase = (text) => {
    return (text.toLowerCase())
}
const removeSpaces = (text) => {
    return (text.trim())
}
const IsString = (text) => {
    return(typeof (text)=='string')
}

const getExtension = (text) => {
    return(text.substring(text.indexOf('.')+1,text.length))
}
const countSpaces = (text) => {
    count=0;
    for (let i =0;i<text.length;i++){
        if(text[i]==' '){
            count++;
        }
        
    }
    return(count)
}
const InverseString = (text) => {
    let reveseString="";
    for (let i =text.length-1;i>=0;i--){
        reveseString=reveseString+text[i]
        }
        return(reveseString)
}

const power = (x, y) => {
    return(Math.pow(x,y))
}
const absoluteValue = (num) => {
    return(Math.abs(num))
}
const absoluteValueArray = (array) => {
    let absArr = [];
    for (let i = 0; i<array.length;i++){
        absArr.push(Math.abs(array[i]))
    }
    return(absArr)
}
const circleSurface = (radius) => {
    return(Math.round(Math.PI *Math.pow(radius,2)))
}
const hypothenuse = (ab, ac) => {
    return(Math.sqrt(Math.pow(ab,2)+Math.pow(ac,2)))
}
const BMI = (weight, height) => {
    let num = weight/(height*height);
    return( Math.round((num + Number.EPSILON) * 100) / 100);
}

const createLanguagesArray = () => {
    return(["Html", "CSS", "Java", "PHP"])
}

const createNumbersArray = () => {
    return([0,1,2,3,4,5])
}

const replaceElement = (languages) => {
    languages[2]="Javascript"
    return languages
}

const addElement = (languages) => {
    languages.push("Ruby")
    languages.push("Python")
    return languages
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1)
    numbers.unshift(-2)
    return numbers
}

const removeFirst = (languages) => {
    languages.shift()
    return languages
}

const removeLast = (languages) => {
    languages.pop()
    return languages
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(',')
}

const convertArrToStr = (languages) => {
    return languages.toString(',')
}

const sortArr = (social_arr) => {
    return social_arr.sort()
}

const invertArr = (social_arr) => {
return social_arr.sort().reverse()
}