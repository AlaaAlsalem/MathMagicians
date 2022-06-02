import Calculater from '../Components/Calculater'

const Calculator = () => {

    return (
        <div className='calcSections'>
            <div>
                <h3> Let's do some Math</h3>
            </div>
            <div className='calculatorSection'>
                <Calculater/>
            </div>
        </div>
    )
}

export default Calculator