import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import CarbonButton from './components/button/CarbonButton';
import BeaDiv from './components/div/BeaDiv';

function App() {

  const [beaClasses, setBeaClasses] = useState({
    green: 'green base',
    red: 'red base',
    status: 'base'
  })

  const expand = () => {
    let {status} = beaClasses
    if(status === 'base') {
      // red collapse
      // green expand
      // status expand
      setBeaClasses({
        green: 'green expand',
        red: 'red collapse',
        status: 'expand'
      })
    } else {
      setBeaClasses({
        green: 'green base',
        red: 'red base',
        status: 'base'
      })
    }
  }

  const fullscreen = () => {
    let {status} = beaClasses
    if(status === 'fullscreen') {
      // red collapse
      // green expand
      // status expand
      setBeaClasses({
        green: 'green base',
        red: 'red base',
        status: 'base'
      })
    } else {
      setBeaClasses({
        green: 'green fullscreen-close',
        red: 'red fullscreen-open',
        status: 'fullscreen'
      })
    }
  }


  return (
    <div className="App">
      <CarbonButton
        text='Expande/Collapse'
        callback={expand}
        />
      <CarbonButton
        text='Full Screen'
        callback={fullscreen}
        />
        <div className='App-header'>
          <BeaDiv beaclass={beaClasses.green}/>
          <BeaDiv beaclass={beaClasses.red}/>
        </div>
    </div>
  );
}

export default App;
