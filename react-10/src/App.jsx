import { useState, useEffect, useRef, useReducer } from 'react'; 

 

const initialState = { 

 data: [], 

 isLoading: false, 

 isError: false, 

 searchTerm: 'react', 

}; 

 

function storiesReducer(state, action) { 

 switch (action.type) { 

   case 'FETCH_INIT': 

     return { ...state, isLoading: true, isError: false }; 

   case 'FETCH_SUCCESS': 

     return { ...state, isLoading: false, data: action.payload }; 

   case 'FETCH_FAILURE': 

     return { ...state, isLoading: false, isError: true }; 

   case 'REMOVE_ITEM': 

     return { ...state, data: state.data.filter(item => item.objectID !== action.payload) }; 

   case 'SET_SEARCH_TERM': 

     return { ...state, searchTerm: action.payload }; 

   default: 

     throw new Error(); 

 } 

} 

 

function App() { 

 const inputRef = useRef(); 

 const [state, dispatch] = useReducer(storiesReducer, initialState); 
  const [termSubmit, setTermSubmit] = useState(initialState.termSubmit)
 
  useEffect(() => {
    dispatch({ type: 'FETCH_INIT'});
    fetch(`https://hn.algolia.com/api/v1/search?query=${termSubmit}`)
    .then(response =>{ 
      if(!response.ok){
        throw new Error(`ERROR: ${response.status}`);
      }
      return response.json();
    })
    .then(result => {
      dispatch({type: 'FETCH_SUCCESS', payload: result.hits})
      console.log(result.hits)
    })
    .catch(error => {
      dispatch({type: 'FETCH_FAILURE'})
      console.log(error.message);
    })
  }, [])

 return ( 

   <div> 

      <h1>My Articles</h1> 

     {/* Your code goes here */} 

     {state.isLoading && <p>Loading...</p>}
     {state.isError && <p>Something went wrong</p>}

      <form 
      onSubmit={(event)=>{
        event.preventDefault();
      }}>

      <input
       type='text'
       ref={inputRef}/>
      <button type='button' onClick={ () => inputRef.current.focus()}>Search</button>

      <ul>
        {state.data.map(itemData => (
          <li key={itemData.objectID}>
            {itemData.title}{''}
            <button 
            type='button' 
            onClick={() => {
              dispatch({type: 'REMOVE_ITEM', payload: itemData.objectID})
            }}
            >
            Dismiss
            </button>
          </li>
        ))}
      </ul>
      </form>
   </div> 

   

 ); 

} 

 

export default App; 