import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/state/CounterSlice';

const Counter = () => {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch(increment())}}>Increase</button>
            <button onClick={()=>{dispatch(decrement())}}>Decrease</button>
        </div>
    );
};

export default Counter;