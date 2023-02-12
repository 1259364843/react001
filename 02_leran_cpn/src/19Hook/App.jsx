import React, { createContext,useState } from 'react';
import Counter from './1_Counter'
import Effect from './2_Effect'
import Context from './3_useContext'
import UseReducer from './4_useReducer';
import UseCallback from './5_useCallback'
import UseMemo from './6_useMemo'
import {Memo2} from './6_useMemo'
import UseRef from './7_useRef'
import {RefDemo2, RefDemo3} from './7_useRef'
import UseImperativeHandle from './8_useImperativeHandle'
import UseLayoutEffect from './9_useLayoutEffect'
import DiyHook from './10_diyHook'
export const UserContext = createContext() 
export const TokenContext = createContext()
// Hook
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
    <h1>React Hook</h1>
      <hr />
      <h2>1.useState</h2>
        <Counter />
      <hr />
      <h2>2.useEffect</h2>
        <Effect />
      <hr />
      <h2>3.Context</h2>
        <UserContext.Provider value={{name:'tom', age: 20}}>
          <Context />
        </UserContext.Provider>
      <hr />
      <h2>4.UseReducer</h2>
        <UseReducer />
      <hr/>
        <UseCallback />
      <hr/>
      {/*useMemo*/}
        <UseMemo />
        <Memo2 />
      <hr />
        <UseRef />
        <RefDemo2 />
        <RefDemo3 />
      <hr />
        {/*UseImperativeHandle*/}
        <UseImperativeHandle />
      <hr />
        <UseLayoutEffect />
      <hr/>
        {/*自定义hook*/}
        {show && <DiyHook />}
        {/*自定义hook-共享context*/}
        <UserContext.Provider value={{name: 'zs', age: 20}}>
          <TokenContext.Provider value="token123456789">
            <DiyHook />
          </TokenContext.Provider>
        </UserContext.Provider>
        <button onClick={e => setShow(!show)}>show切换</button>
    </div>
  );
}

export default App;
