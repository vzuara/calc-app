/* eslint no-eval: 0 */
import { useState } from 'react'
import words from 'lodash.words'
import { Result, MathOperation, Functions, Numbers } from './components'

import './App.css'

const App = () => {
  
  const [stack, setStack] = useState('')

  const items = words(stack,/[^-^+^*^/]+/g)
  const value = items.length > 0  ? items[items.length - 1] : '0'

  return (
    <main className='react-calculator'>
      <Result value={value}/>
      <div className='numbers'>
        <Numbers onClickNumber={number => setStack(`${stack}${number}`)}/>
      </div>
      <div className='functions'>
        <Functions
          onClickClear={() => setStack('')}
          onClickDelete={() => {
            if (stack.length > 0) {
              const newStack = stack.substring(0, stack.length -1)
              setStack(newStack)
            }
          }}
        />
      </div>
      <div className="math-operations">
        <MathOperation 
          onClickOperation={operation => setStack(`${stack}${operation}`)}
          onClickEqual={equal => stack && setStack(eval(stack).toString())}
        />
      </div>
    </main>
  )
}

export default App;