import { useState, useEffect } from "react";
import React  from 'react';


function CoinName () {

    const [coinName, setCoinName ] = useState ([]);   
    

    const fetchCoinName = () => {
        fetch("https://api.coingecko.com/api/v3/coins/")
            .then(res => res.json())
            .then(data => setCoinName(data[1].name))
    }
    
  
    // console.log(coinName)
    

    useEffect(() =>{
        fetchCoinName()
        
    },[]);
    return(
        <div>
            {coinName}

        </div>

    )
}



export default CoinName



// 

// const getCoinData =() => {

   

//      function () ={
//       fetch('https://api.coinpaprika.com/v1/coins')
//     .then( res => res.json)
//     .then( data => [SetCoinData(data)] )

//     return
//  }
// }




