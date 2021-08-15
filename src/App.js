import './App.css';
import Header from './components/Header';
import logo from "./components/images/logo.png"
import {useState,useEffect} from 'react'
import axios from 'axios'
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from "./components/Search"
import Spinner from './components/Spinner';
import {Route, Switch } from "react-router-dom"; 

function App() {
  
  const [items,setItems]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [query,setQuery]=useState('');
  const [quotes,setQuotes]=useState('');
 

    useEffect(()=>{
        const fetchItems=async()=>{

            const result=await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`,
                
            )
            
            const result2=await axios(  
              `https://www.breakingbadapi.com/api/quotes?author=${query}`
            )

            const name=result2.data[57].author;
            const name1=name.split(" ")[0]
            const name2=name.split(" ")[1];
            // console.log("name-->",name2)

            const result3=await axios(  
              `https://www.breakingbadapi.com/api/quote?author=${name1}+${name2}`
            )
            // console.log("name1",name1);
            // console.log("name2",name2);
            // console.log("result-->",result3)
            setItems(result.data);
            setIsLoading(false);
        }
        fetchItems();
    },[query])

  return (
    <div className="container">

      <Header />
      <Search getQuery={(q)=>setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  ); 
}

export default App;
