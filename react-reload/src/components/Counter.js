import React from 'react';
import { connect } from 'react-redux';
import { shibaActions } from '../store/shibaActions';

function Counter(props) {
    const handleOnAdd = () => {
        props.addOne(props.counter)
    }

    const handleOnSub = () => {
        props.subOne(props.counter)
    }

    return (
        <div className="container-counter">
            <h1 className="heading">Counter!</h1>
            <button onClick={handleOnAdd}>+</button>
            <p>{props.counter}</p>
            <button onClick={handleOnSub}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOne: (num) => dispatch(shibaActions.addOne(num)),
        subOne: (num) => dispatch(shibaActions.subOne(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);