import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { shibaActions } from './store/shibaActions';
import Counter from './components/Counter';

function App(props) {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    props.fetchShibes(number)
  }, []);

  if (!props.shibes || !props.shibes[0]) {
    return (<h1>Loading!</h1>)
  } else {
    
    let shibaImages = props.shibes.map(shiba => {
      return (
        <img src={shiba} alt="shiba" key={shiba}></img>
      );
    })
  
    return (
      <div className="App">
        {shibaImages}
        <Counter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shibes: state.shibas
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShibes: (num) => dispatch(shibaActions.fetchShibes(num))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
