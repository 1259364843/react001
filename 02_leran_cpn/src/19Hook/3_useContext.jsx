import React, {useContext} from 'react';
import { UserContext } from './App';
function Context() {
  // 获取context
  const user = useContext(UserContext)
  console.log(user);
  return (
    <div>
    Context hook使用
    </div>
  );
}

export default Context;
