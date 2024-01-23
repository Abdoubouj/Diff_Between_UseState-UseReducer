import './App.css'
import FormUseReducer from './components/FormUseReducer'
import FormUseState from './components/FormUseState'
import UseReducer from './components/UseReducer'
import UseState from './components/UseState'

function App() {

  return (
    <>
      <div className="container">
        <div className='d-flex gap-5'>
         <UseState/>
         <UseReducer/>
        </div>
        <div className='d-flex gap-5'>
        <FormUseState/>
        <FormUseReducer/>
        </div>
      </div>
    </>
  )
}

export default App
