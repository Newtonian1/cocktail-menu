import CocktailList from './components/CocktailList'
import './App.css'
import { useState } from 'react'
import { TextField, Select, MenuItem, createTheme, ThemeProvider } from '@mui/material'
import { SearchType } from './data/search'

const theme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>(SearchType.Name);
  const [random, setRandom] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <div id="root">
        <h2
          onClick={() => { setRandom(!random) }}
        >
          It's 10 AM somewhere
        </h2>

        <div id="search-bar">
          <TextField
            id="search-value-text-field"
            label="Search"
            variant="outlined"
            onChange={(event) => {setSearch(event.target.value.toLowerCase())}}
          />
          <Select
            id="search-type-select"
            variant="outlined"
            value={searchType}
            onChange={(event) => {setSearchType(event.target.value as SearchType)}}
          >
            <MenuItem value={SearchType.Name}>Cocktail</MenuItem>
            <MenuItem value={SearchType.Ingredient}>Ingredient</MenuItem>
          </Select>
        </div>

        <CocktailList search={search} searchType={searchType} random={random}/>
      </div>
    </ThemeProvider>
  )
}

export default App;
