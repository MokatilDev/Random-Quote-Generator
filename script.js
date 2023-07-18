const volume = document.querySelector(".volume")
const copy = document.querySelector(".copy")
const twitter = document.querySelector(".twitter")

const author = document.querySelector(".Author")
const Content = document.querySelector(".content p")

const NewQuote = document.querySelector("button")


copy.addEventListener("click", () => {
    navigator.clipboard.writeText(Content.textContent)
})

twitter.addEventListener("click", () => {
    let url = `https://twitter.com/intent/tweet?text=${Content.textContent}`
    window.open(url, "_blank")
})


volume.addEventListener("click", () => {
    let sund = new SpeechSynthesisUtterance(`${Content.textContent} by ${author.textContent}`)
    speechSynthesis.speak(sund)
})

NewQuote.addEventListener("click", () => {
    NewQuote.classList.add("active")
    NewQuote.textContent = "Loading..."
    fetch("https://api.quotable.io/random").then(reponse => reponse.json()).then((Reponse) => {
        Content.textContent = Reponse.content
        author.textContent = Reponse.author
        NewQuote.textContent = "New Quote"
        NewQuote.classList.remove("active")
    })
})