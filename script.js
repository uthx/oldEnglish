let inputText=document.querySelector("#text-input")
let button=document.querySelector("#btn-translate")
let outputText=document.querySelector("#output")

const ENDPOINT_URL="https://api.funtranslations.com/translate/oldenglish.json";

function getInOldEnglish(text){
    return `${ENDPOINT_URL}?text=${text}`;
}

function errorHandeler(err){
    alert("something went wrong.please refresh and try again.")
    console.log("something went wrong.please try again after some time",err.message);
}


const trasnlateInput = () => {
    fetch(getInOldEnglish(inputText?.value))
    .then(response=>response.json())
    .then(result=>{
        let translatedInput=result.contents.translated;
        outputText.innerText=translatedInput;
    })
    .catch(errorHandeler)
}
const validateInput = () => {
    if(inputText?.value?.length){
        trasnlateInput()
    }else{
        console.log("Invalid input")
        alert("Input can't be empty")
    }
}
button.addEventListener("click",validateInput)