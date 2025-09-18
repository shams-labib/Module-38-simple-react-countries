import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCpuntry, handleFlags}) => {


    // console.log(handleVisitedCpuntry)


    const [visited, setVisited] = useState(false)
    const handleBtn = ()=>{
        // 1. first system
            //  if(visited){
            //     setVisited(false)
            //  }else{
            //     setVisited(true)
            //  }
            // 2. Second system

            // ekhn ami jdi ternery operator use korte cai tahole
            // setVisited(visited ? false : true)

            // 3. thired system
            setVisited(!visited);

            // visited country dekhar jonno function
            handleVisitedCpuntry(country);
    }
    // console.log(country)
    return (
        // jdi ami class e condtion use korte cai tahole
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name : {country.name.common} </h2>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area}</p>
            {/* ekhane conditional rendaring kora hoic */}
            <h2>Size : {country.area.area > 10000 ? "Big Country" : "Small Country"}</h2>


            <button onClick={handleBtn}>{visited ? "Visited" : "Not Visited"}</button>
            <button onClick={()=>handleFlags(country.flags.flags.png)}>Add Visited Flags</button>
        </div>
    );
};

export default Country;