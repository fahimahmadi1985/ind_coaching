import React, {useState, createContext} from 'react'
import One from './components/One'

export let nameContext = createContext();
export let userContext = createContext();

function App() {
    const [name, setName] = useState('fahim');
    //create the context

  return (
      <div>
          <userContext.Provider value={{username:'fahimahmadi', pass: '123'}}>
          <nameContext.Provider value={name}>
              <One />
              </nameContext.Provider>
          </userContext.Provider>
        </div>
  )
}

export default App