
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { login } from '../auth';
import Table from './Table';
import './../styles/PageTable.css';
const PageTable = () => {
    const [competitions, setCompetitions] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore] = useState(true);
    const [token,setToken] = useState(null);
    
    useEffect(()=>{
        const authenticate = async () => {
            try {
                const token = await login('666666666','admin'); //this is the credencials 
                setToken(token);
            } catch(error ){
                console.error('Authentication failed: ',error);
            }
        };
        authenticate();
    }, [])
    
    useEffect(() => {
        if(token){
            fetchCompetitions();
        }
    }, [page,token]);
  
    const fetchCompetitions = async () => {
        try {
          const response = await fetch(`https://play.nextcaddy.com/api/results?page=${page}`, {
                
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
      
        const result = await response.json();
      
        setCompetitions(result['hydra:member']);
          
        } catch (error) {
          console.error('Error fetching competitions:', error);
        }
      };
      
  
    const loadMoreData = () => {
      setPage(page + 1);
    };
  
    return (
        <div className='page-container'>
      <InfiniteScroll
        dataLength={competitions.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more data to show</p>}
      >
       <Table data={competitions} />
          
      </InfiniteScroll>
      </div>
    );
  };
  
  export default PageTable;
