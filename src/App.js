
import React from 'react'
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import PageNotFound from './components/PageNotFound/PageNotFound'

/*function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' component={Home}/>
        <Route path='/movie/:imdbId' component={MovieDetail}></Route>
        <Route component={PageNotFound}></Route>
        </Routes>
      </Router>
    </div>
  );
}*/
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movies/:imdbID' element={<MovieDetail />}></Route>
        <Route path='/' element={<Home />}/>
        <Route component={PageNotFound}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
