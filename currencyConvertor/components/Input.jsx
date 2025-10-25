import  React, { use } from "react";


function Input({
    label,
    value,
    onChange,
    selectedCurrency,
    setSelectedCurrency,
    disabled = false,
    type = "number",
    style = { border: '1px solid black', padding: '8px', borderRadius: '4px'},

}) {

    return (
        <div style={{ backgroundColor: 'lightgray', padding: '10px', margin: '10px', ...style }}>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
            <select style={{ marginLeft: '8px' }} onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
        </div>
    );
}
export default Input;