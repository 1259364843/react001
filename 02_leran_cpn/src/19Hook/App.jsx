import React, { createContext } from 'react';
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
export const UserContext = createContext() 

// Hook
function App() {
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
      <h2>UseReducer</h2>
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
    </div>
  );
}

export default App;
