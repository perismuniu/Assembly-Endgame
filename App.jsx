import { useState } from "react"
import { languages } from "./language.js"
import Language from "./Language.jsx"

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("re act  ")

    const languageElements = languages.map((data) => {
        return (
            <Language 
                key={data.name}      
                name={data.name}
                backgroundColor={data.backgroundColor}
                color={data.color}
            />
        )
    })

   const currentWordArray = currentWord.split('').map((letter, index) => {
        return(
            <span className="current-word-letter" key={index}>{letter.toUpperCase()}</span>
        )
    })

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="languages">
                {languageElements}
            </section>
            <section className="current-word-section">
                {currentWordArray}
            </section>
        </main>
    )
}
