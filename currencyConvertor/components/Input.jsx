import React from "react";

function Input({
    label,
    value,
    onChange,
    selectedCurrency,
    setSelectedCurrency,
    disabled=false,
    type = "number",
    style = { border: '1px solid black', padding: '30px', borderRadius: '10px'},

}) {
    
    return (
        <div className="bg-blue-200  m-2" style={{ ...style }}>
            <label className="text-3xl font-bold text-blue-500 pr-5 py-2">{label}</label>
            <input className="text-3xl bg-yellow-300 text-black border-gray-300 rounded-md p-2" type={type} value={value} onChange={onChange} disabled={disabled}   />
            <select className="text-3xl text-black ml-2 px-3 py-2 border border-gray-300 rounded-md " value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
        </div>
    );
}
export default Input;