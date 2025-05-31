import './App.css'
import { BooksProvider } from './BooksContext'
import NameList from './list'
import Spinning_Wheel from './Spinning_Wheel'

function App() {

  return (
    <BooksProvider>
      <Spinning_Wheel />
      <NameList />
    </BooksProvider>
  )
}

export default App
