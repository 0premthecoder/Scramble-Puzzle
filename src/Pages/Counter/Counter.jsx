import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from '../../Redux/counterslice';
const Counter = () => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  return (<>
    <div>Counter {count}</div>
    <button onClick={()=> dispatch(increment())}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>decrement</button>
    <button onClick={()=> dispatch(reset())}>Reset</button>
    <button onClick={()=> dispatch(incrementByAmount(2))}>By 2</button>
    </>
  )
}

export default Counter