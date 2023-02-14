

import Query from './Query/Query'
import AllMessage from './UI/AllMessage'
import ParticularIdQuery from './Query/ParticularIdQuery'
import DisplayParticularUi from './ParticularUI/DisplayParticularUi'
import { Route, Routes } from 'react-router-dom'
import Search from './Search/Search'
import './App.css'



function App() {

  return (
    <div>
      <Routes>
        <Route exact path = "/" element = {<AllMessage />}/>
        <Route exact path = "/search" element= {< Search/>} />
        <Route exact path = "message/:id" element = {< DisplayParticularUi/>} />
      </Routes>
    </div>
  )
}

export default App
