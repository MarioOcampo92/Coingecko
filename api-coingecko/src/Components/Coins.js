import { useState, useEffect } from "react";
import React  from 'react';


function Coins () {

    const [coinName, setCoinName ] = useState ([]);
    // const [priceCoin, setPriceCoin ] = useState ([]);
    // const [imgCoin, setImgCoin ] = useState ([]);

    const fetchCoin = () => {
        fetch("https://api.coingecko.com/api/v3/coins/")
            .then(res => res.json())
            .then(data => setCoinName(data[0].name))
    }
    console.log(coinName)

    useEffect(() =>{
        fetchCoin()
    },[]);
    return(
        <div>
            {coinName}

        </div>

    )
}



export default Coins



// 

// const getCoinData =() => {

   

//      function () ={
//       fetch('https://api.coinpaprika.com/v1/coins')
//     .then( res => res.json)
//     .then( data => [SetCoinData(data)] )

//     return
//  }
// }




