import { Fragment, useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    // const [nombre, setNombre] = useState("Goku");
    // console.log(nombre, setNombre);
    const [counter, setCounter] = useState(value);

    // handleAdd
    const handleAdd = (e) => {
        // setCounter(counter + 1);
        setCounter( (c) => c + 1 );
    }
    const handleReset = (e) => {
        // setCounter(counter + 1);
        setCounter( (c) => value );
    }
    const handleSubstract = (e) => {
        // setCounter(counter + 1);
        setCounter( (c) => c - 1 );
    }

    return (
        <Fragment>
            <h1> CounterApp </h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;
