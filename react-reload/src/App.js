import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { shibaActions } from './store/shibaActions';
import Counter from './components/Counter';

function App(props) {
  // const [number, setNumber] = useState(1);

  useEffect(() => {
    props.fetchShibes(props.counter)
  }, [props.counter]);

  if (!props.shibes || !props.shibes[0]) {
    return (
      <div>
        {(props.shibasLoading || !props.shibasFetched) && <h1 className="heading">Loading!</h1>}
        {!props.shibasLoading && !props.shibasFetched && <h1>Something went wrong - shibas not loaded.</h1>}
      </div>
    )
  } else {
    
    let shibaImages = props.shibes.map(shiba => {
      return (
        <img className="image" src={shiba} alt="shiba" key={shiba}></img>
      );
    })
  
    return (
      <div className="App">
        {!props.shibasLoading && !props.shibasFetched && <h2>Something went wrong - shibas not loaded.</h2>}
        <Counter />
        {shibaImages}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shibes: state.shibas,
    counter: state.counter,
    shibasFetched: state.shibasFetched,
    shibasLoading: state.shibasLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShibes: (num) => dispatch(shibaActions.fetchShibes(num))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
