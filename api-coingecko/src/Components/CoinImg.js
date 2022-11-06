import { useState, useEffect } from "react";
import React  from 'react';

function CoinImg () {
    const [imgCoin, setImgCoin ] = useState ([]);

    const fetchimgCoin = () => {
        fetch("https://api.coingecko.com/api/v3/coins/")
            .then(res => res.json())
            .then(data => setImgCoin(data[1].image.large))

   }


useEffect(() =>{
    fetchimgCoin()
},[]);

return(
    <div>
        <span>
        <img src={imgCoin} alt ="" />
        </span>
    </div>
)
}

export default CoinImg;