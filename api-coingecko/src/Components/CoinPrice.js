import React from "react" 
import { useState, useEffect } from 'react'


function Coinprice () {
    const [priceCoin, setPriceCoin ] = useState ([]);

     const fetchPriceCoin = () =>{
       fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then(res => res.json())
         .then(data => setPriceCoin(data[1].current_price))

     }
     useEffect(() =>{
        fetchPriceCoin()
        
    },[]);
    console.log(priceCoin)

    return(
        <div>
            {priceCoin}

        </div>

    )
}



export default Coinprice



