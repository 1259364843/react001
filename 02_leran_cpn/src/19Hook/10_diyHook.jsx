import React, {useState, useEffect, useContext} from 'react';
import { UserContext, TokenContext } from './App'

// 自定义hook

// 1.打印组件的创建和销毁
const useLoggingLife = (name) => {
  useEffect(() => {
    console.log(`${name}组件创建`);
    return () => {
      console.log(`${name}组件销毁`);
    };
  }, []);
}

// 2.共享context
function useUserContext() {
  const user = useContext(UserContext)
  const token = useContext(TokenContext)
  return [user, token]
}

// 3.获取滚动位置hook
function useScrollPosition() {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setScroll(window.scrollY)
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return scroll
}

// 4.localStorage
function useLocalStotage(key) {
  const [name, setName] = useState(() => {
      const name = JSON.parse(window.localStorage.getItem(key))
      return name
  });
  useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(name))
  }, [name])
  return [name, setName]
}
function DiyHook() {
  // const positon = useScrollPosition()
  // console.log(positon);
  // useLoggingLife('DIY')
  // const [user, token] = useUserContext()
  // console.log(user, token);

  // 4
  const [name, setName] = useLocalStotage("name")
  return (
    <div>
      <h2>10.自定义hook</h2>
      <h2>{name}</h2>
      <button onClick={e => setName("李四")}>设置name</button>
    </div>
  );
}

export default DiyHook;
