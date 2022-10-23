import PropTypes from 'prop-types';
/**
 * 属性验证
 */
// 子组件

function Cpn(props) {
  const { name, age}= props
  return (
    <div>
      {name}
      {age}
    </div>
  )
}

// 属性校验
Cpn.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
}

export default function App() {
  return (
    <div>
      父组件
      <hr />
      <Cpn name='父组件传递的值' age={30}/>
    </div>
  )
}

