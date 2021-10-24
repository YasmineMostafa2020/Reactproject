import { useState } from 'react'
import './counter.css'
function Counter() {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setcount(count - 1);
        }
    }
    return (
        <div className="d-flex justify-content-center text-center w-50  container  mt-5 rounded-pill shadow-lg p-3 mb-5 bg-body rounded">
            <div>
            <div className="mt-3 fs-1  fw-bold ">
                {count}
            </div>
            <button  className="btn btn-outline-primary px-5 mt-3 mb-2" onClick={increment}>+</button>
            <button className="btn btn-outline-danger  mx-4 px-5 mt-3 mb-2" onClick={decrement}>-</button>
        </div>
        </div>
    )
}
export default Counter;