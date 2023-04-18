const button = document.getElementById("btn")
const jokeElement = document.getElementById("joke")



const apiKey = "QQNx4C5R6QwA1i3x/U0WZw==jpLcDfYm3rVzHiNN"

const apiUrl ="https://api.api-ninjas.com/v1/dadjokes?limit="

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey,
    }
}

async function getJoke(){
        try {

        jokeElement.innerText = "Updating..."
    
        button.disabled = true
        button.innerText = "Loading..."
    
       const response = await fetch(apiUrl, options)
       const data = await response.json()
    
       button.disabled = false
       button.innerText = "Tell Me A Joke"
    
       jokeElement.innerText= data[0].joke
    
    //    console.log(data[0].joke);
} catch (error) {

    jokeElement.innerText = "An error occured try again later..."
    button.disabled = false
    button.innerText = "Tell Me A Joke"
    console.log(error)
}
}



button.addEventListener("click", getJoke)


//footer

const currentYear = new Date().getFullYear();
const footerText = document.getElementById('copyright')

if(footerText) {
    footerText.textContent = `@CopyRight Reserved Since ${currentYear}`
}