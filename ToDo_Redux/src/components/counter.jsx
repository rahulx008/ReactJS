import { useSelector, useDispatch } from "react-redux";
import { increment, decrement }  from "../features/counter/counterSlice";



const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="bg-black-800 text-white p-4 rounded-lg flex flex-col items-center justify-center gap-4  border border-red-700">
    <h1 className="bg-transparent text-3xl sm:text-4xl font-bold text-grey-800">
        Counter: {count}
    </h1>

    <button
        onClick={() => dispatch(increment())}
        className=""
    >
        Increment
    </button>

    <br />

    <button
        onClick={() => dispatch(decrement())}
    >
        Decrement
    </button>
</div>

    )


}
export default Counter;