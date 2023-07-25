const userScore = document.querySelector("#user-score")
const compScore = document.querySelector("#comp-score")
const resultText = document.querySelector("#result-text")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const choices = document.querySelector(".choices")
console.log(userScore.textContent)

let userScorePoint = 0;
let compScorePoint = 0;
let userChoiceValue;

const getDefaultStyles = () => {

    rock.style.background = "cadetblue"
    rock.style.transition = "0.2s ease"

    paper.style.background = "cadetblue"
    paper.style.transition = "0.2s ease"

    scissors.style.background = "cadetblue"
    scissors.style.transition = "0.2s ease"
    
}

const compareValues = (compChoice,userChoice) => {
    if ( (userChoice == "TAS" && compChoice =="TAS")  ) {
        getDefaultStyles()
        resultText.innerHTML = ` <p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p>  BERABERE`
        rock.style.background = "orange"
        rock.style.transition = "1s ease"
        
    }else if (userChoice == "TAS" && compChoice =="MAKAS"){
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> KAZANDIN`
        rock.style.background = "green"
        rock.style.transition = "1s ease"
        userScorePoint++;
        userScore.textContent = userScorePoint;
        

    }else if ( userChoice == "TAS" && compChoice =="KAGIT") {
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> KAYBETTIN`
        rock.style.background = "red"
        rock.style.transition = "1s ease"
        compScorePoint++;
        compScore.textContent = compScorePoint;

    }else if (userChoice == "KAGIT" && compChoice =="TAS"){
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p>  KAZANDIN`
        paper.style.background = "green"
        paper.style.transition = "1s ease"
        userScorePoint++;
        userScore.textContent = userScorePoint;

    }else if ( userChoice == "KAGIT" && compChoice =="MAKAS") {
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> KAYBETTIN`
        paper.style.background = "red"
        paper.style.transition = "1s ease"
        compScorePoint++;
        compScore.textContent = compScorePoint;

    }else if ((userChoice == "KAGIT" && compChoice =="KAGIT" )) {
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> BERABERE`
        paper.style.background = "orange"
        paper.style.transition = "1s ease"
        
    }else if (userChoice == "MAKAS" && compChoice =="KAGIT"){
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> KAZANDIN`
        scissors.style.background = "green"
        scissors.style.transition = "1s ease"
        userScorePoint++;
        userScore.textContent = userScorePoint;

    }else if ( userChoice == "MAKAS" && compChoice =="TAS") {
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> KAYBETTIN`
        scissors.style.background = "red"
        scissors.style.transition = "1s ease"
        compScorePoint++;
        compScore.textContent = compScorePoint;

    }else if (userChoice == "MAKAS" && compChoice =="MAKAS") {
        getDefaultStyles()
        resultText.innerHTML = `<p>Bilgisayar Seçimi<span style="color:blue"> ${compChoice}</span></p>     <p>Senin Seçimin<span style="color:red"> ${userChoice}</span></p> BERABERE`
        scissors.style.background = "orange"
        scissors.style.transition = "1s ease"
    }
    
}


const getRandomChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    let compChoice;
    

    if(randomNumber == 0) {
        compChoice = "TAS";
    }else if (randomNumber == 1) {
        compChoice = "KAGIT"
    }else {
        compChoice = "MAKAS"
    }
    
    return compChoice
    
}


async function runEvents  ()  {
    let compChoiceValue = await getRandomChoice();
    await compareValues(compChoiceValue,userChoiceValue);
    
}

runEvents()

choices.addEventListener("click", runEvents)
rock.addEventListener("click", () => { userChoiceValue = rock.textContent.trim()})
paper.addEventListener("click", () => { userChoiceValue = paper.textContent.trim()})
scissors.addEventListener("click", () => { userChoiceValue = scissors.textContent.trim()})

