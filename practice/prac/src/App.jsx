import { useState } from 'react'

function App() {
  const [count, setCount] = useState(10)

  return (
    <>
      <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
      </div>
    </>
  )
}

function CustomButton(props)
{

  function buttonHandler()
  {
    props.setCount(props.count+1);
  }

  return <button onClick={buttonHandler}>
    Counter {props.count}
  </button>
}

export default App
