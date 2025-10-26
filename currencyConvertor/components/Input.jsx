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
        <div className="bg-gray-200 py-10 m-2" style={{ ...style }}>
            <label className="text-blue-500 px-5 py-2">{label}</label>
            <input className="bg-red-500 text-black border-gray-300 rounded-md p-2" type={type} value={value} onChange={onChange} />
            <select className="text-black ml-2 px-3 py-2 border border-gray-300 rounded-md " onChange={(e) => setSelectedCurrency(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
                <option>GBP</option>
            </select>
        </div>
    );
}
export default Input;