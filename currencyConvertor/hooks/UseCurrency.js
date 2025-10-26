import { useEffect, useState } from 'react';

function useCurrency(currency, toCurrency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then((res) => res.json())
            .then((jsonData) => {
                setData(jsonData['rates']);
            })
            .catch(error => {
                console.error('Error fetching currency data:', error);
            });
    }, [currency, toCurrency]);
    console.log(data);
    
    return data;
}
export default useCurrency;

