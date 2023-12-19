import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bg from '../utils/bg.json'

const Button = ({setQuoteRandom, setBgRandom}) => {
    
    const handleChangePhrase = () => {
        setQuoteRandom(getRandomFromArr(phrases))
        setBgRandom(getRandomFromArr(bg))
    }

  return (
    <div>
        <button onClick={handleChangePhrase} className="btn">Probar mi suerte</button>
    </div>
  )
}
export default Button