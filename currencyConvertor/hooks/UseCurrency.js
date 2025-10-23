import {useEffect, useState} from 'react';


function useCurrency(currency){
    let data = '{}';
    useEffect(()=>{
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res)=>{res.json})
        .then((res)=>{data = res['rates']})
    }, [currency])
    console.log(data);
    return data;
}
export default useCurrency;

