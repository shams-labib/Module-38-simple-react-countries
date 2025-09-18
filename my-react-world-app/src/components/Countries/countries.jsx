import React, { use, useState } from 'react';
import Country from '../Country/country';
import './countries.css'


// 2. ebar data ta ke recieve korlas {} distrucing er maddome, then etak use() state er maddome promise take object e convert kore nilam! ekhan thekei data ta fetch kora complete, next ei fetch kora data niye kaj korar jonno country er vitore data gulo map use kore pathay dibo!


const Countries = ({countriesPromise}) => {
    // ami koy ta country te visit korsi seta korar jonno state:
     
    const [visitedCountry, setVisitedCountry] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])




    const handleVisitedCpuntry = (country)=>{
        console.log('visited country btn clicked', country)
        const newArrays = [...visitedCountry, country];
        setVisitedCountry(newArrays)
    }

    const handleFlags = (flags)=>{
        const newFlags = [...visitedFlags, flags];
        setVisitedFlags(newFlags)
    }

   const countriesData = use(countriesPromise)
   const countries = countriesData.countries;
//    console.log(countries)
    return (
        <div>
            <h1>I'm connectedt mister : {countries.length}</h1>
            <h2>Total Visited Country : {visitedCountry.length} </h2>

            <h3>New Visited Flags : {visitedFlags.length}</h3>

              {
                visitedCountry.map(visited =>  <li key={visited.cca3.cca3}>{visited.name.common}</li>)
              }

              <div className='visited-flags'>
                {
                    visitedFlags.map((flag, index) => <img key={index}  src={flag}></img>)
                }
              </div>


            <div className='countries'>
                {
                countries.map(country => <Country handleVisitedCpuntry={handleVisitedCpuntry} handleFlags={handleFlags} key={country.cca3.cca3} country = {country} ></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;