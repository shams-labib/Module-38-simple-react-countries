import React, { use, useState } from 'react';
import Country from '../Country/country';
import './countries.css'


// 2. ebar data ta ke recieve korlas {} distrucing er maddome, then etak use() state er maddome promise take object e convert kore nilam! ekhan thekei data ta fetch kora complete, next ei fetch kora data niye kaj korar jonno country er vitore data gulo map use kore pathay dibo!


const Countries = ({countriesPromise}) => {
    // ami koy ta country te visit korsi seta korar jonno state:
     
    const [visitedCountry, setVisitedCountry] = useState([])
    const handleVisitedCpuntry = ()=>{
        console.log('visited country btn clicked')
    }

   const countriesData = use(countriesPromise)
   const countries = countriesData.countries;
//    console.log(countries)
    return (
        <div>
            <h1>I'm connectedt mister : {countries.length}</h1>
            <h2>Total Visited Country : </h2>
            <div className='countries'>
                {
                countries.map(country => <Country handleVisitedCpuntry={handleVisitedCpuntry} key={country.cca3.cca3} country = {country}></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;