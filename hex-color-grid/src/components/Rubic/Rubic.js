import './Rubic.css'

const hexFigure = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const pickHexFigure = () => {
    return hexFigure[Math.floor(Math.random() * hexFigure.length)]
}

const hexColor = () => {
    return `#${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}${pickHexFigure()}`
}


const colors = []
for (let i = 0; i < 32; i++) { 
    colors.push( hexColor() )
}


const Rubik = () => {
    return (
        <div className="rubik">
         {
            colors.map((color, index) => (
                <div key={index} className="rubik-cube" style={{backgroundColor: color}}>{color}</div>)
            )
        } 
        </div>
    )
}

export default Rubik;
