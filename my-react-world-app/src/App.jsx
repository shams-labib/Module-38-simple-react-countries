
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/countries'


// so ekhane amra ajke data fetch kora clear korbo, tar jonnno ekta var er vitore data ta fetch kore json() e convert kore seta countries.jsx er vitore pathay dibo! must data pathanor jonno susspance use korte hobe, tumi niche kheyal korlei bujhte parbe in sha allah!


  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())


function App() {

  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Countries countriesPromise = {countriesPromise}></Countries>
    </Suspense>
    </>
  )
}

export default App
