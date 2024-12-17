import { useState } from "react"
import { languages } from "./language.js"
import Language from "./Language.jsx"

export default function AssemblyEndgame() {
    const [language, setLanguage] = useState(languages)

    const languageElements = language.map((data) => {
        return (
            <Language 
                key={data.name}      
                name={data.name}
                backgroundColor={data.backgroundColor}
                color={data.color}
            />
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
        </main>
    )
}
