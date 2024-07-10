import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Search = () => {
const [keyword,setkeyword] = useState("");
const navigate= useNavigate();
const searchHandler= (e)=>{
    e.preventDefault();
    
    if(keyword.trim()){
        navigate(`/eats/stores/search/${keyword}`);
    }else{
        navigate("/");
    };
};

  return (
    <form onSubmit={searchHandler}>
    <div className="input-group">
        <input type="text" 
        id="search_field" 
        className="form-control"
         placeholder="Search Your favourite Resturant...."
         onChange={(e)=>setkeyword(e.target.value)}>
         </input>


        <div className="input-group-append">
            <button id="search_btn" className="btn">
               <i className="fa fa-search" arial-hidden="true"></i>
            </button>
        </div>
    </div>
 </form>
  )
}

export default Search;