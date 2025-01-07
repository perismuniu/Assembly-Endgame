import { useState } from "react"
import { languages } from "./language.js"
import clsx from 'clsx'

export default function AssemblyEndgame() {

    const [currentWord, setCurrentWord] = useState("react")
    const [currentGuessedLetters, setCurrenGuessedLetters] = useState([])
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const wrongGuessCount = currentGuessedLetters.filter(letter => !currentWord.includes(letter)).length
    console.log(wrongGuessCount)

    function handleKeyboardClick(letter) {
        setCurrenGuessedLetters(prevGuessed => 
            prevGuessed.includes(letter) ? prevGuessed : [...prevGuessed, letter]
        )
    }

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span
                className="chip"
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

   const currentWordArray = currentWord.split('').map((letter, index) => {
        return(
            <span 
                className="current-word-letter" 
                key={index}
            >
                {currentGuessedLetters.includes(letter) ? letter.toUpperCase() : ''}
            </span>
        )
    })

    // const keyboardElements = alphabet.split('').map((letter) => {
    //     const isCorrect = currentWord.includes(letter)
    //     const isGuessed = currentGuessedLetters.includes(letter)
    //     const keyboardStyle = {
    //         backgroundColor: isGuessed ? (isCorrect ? '#10A95B' : '#EC5D49') : ''
    //     }
    //     return (
    //         <button 
    //             key={letter} 
    //             onClick={() => handleKeyboardClick(letter)}
    //             style={keyboardStyle}
    //             className={clsx('keyboard-btns',{'button-active': !isGuessed})}
    //         >
    //             {letter.toUpperCase()}
    //         </button>
    //     )
    // })

    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = currentGuessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })
        
        return (
            <button
                className={className}
                key={letter}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
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
            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game-btn">New Game</button>
        </main>
    )
}