import React, { useCallback, useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    const increment = () => {
        console.log("加一");
        setCount(count + 1)
    }
    const increment2 = useCallback(() => {
        console.log("加一2");
        setCount(count + 1)
    }, [])
    return (
        <div>
            <h2>useCallback</h2>
            <h2>{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={increment2}>+1</button>
        </div>
    )
}