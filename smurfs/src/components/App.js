import React, { useEffect } from "react";
import "./App.css";
import SmurfCard from "./smurfCard";
import AddForm from './addForm';
import { getData } from '../redux/actions/index';
import { connect } from 'react-redux';


const App = props => {
  console.log('fetch', props)
  useEffect(() => {
      props.getData();
  }, [props.smurfs])

  if (!props) {
      return (
          <p>Loading Client Data...</p>
      )
  } else {
      return (
          <div className="App">
              <h1>SMURFS! 2.0 W/ Redux</h1>
              
              <AddForm />
              {props.smurfs.map(smurf => {
              return <SmurfCard key={smurf.id} smurf={smurf} />
        })}
          </div>
      );
  }
}

const mapStateToProps = state => {
  return {
      smurfs: state.smurfs,
      getData: state.isFetching
  }
}

export default connect(mapStateToProps, { getData })(App);
