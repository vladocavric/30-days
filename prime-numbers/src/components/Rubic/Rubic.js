import './Rubic.css'

const numbers = []
for (let i = 0; i < 32; i++) {
    numbers.push(i)
}
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const Rubik = () => {
    return (
        <div className="rubik">
           { numbers.map((number) => {
            if (number > 1 && isPrime(number)) {
            return <div className="rubik-cube prime">{number}</div>
        } else if (number % 2 === 0) {
            return <div className="rubik-cube even">{number}</div>
        } else {
            return <div className="rubik-cube odd">{number}</div>
        }
      }  )}
        </div>
    )
}

export default Rubik;
