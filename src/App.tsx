import CocktailList from './components/CocktailList'
import './App.css'
import { useState } from 'react'

function App() {
  const [ingredientSearch, setIngredientSearch] = useState<string>("")

  return (
    <div>
      <h1>Cocktails:</h1>
      <CocktailList search={ingredientSearch}/>
      <button
        onClick={() => setIngredientSearch("simple")}
      >
        Filter
      </button>
      {ingredientSearch}
    </div>
  )
}

export default App
