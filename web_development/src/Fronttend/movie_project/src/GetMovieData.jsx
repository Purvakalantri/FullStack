import React ,{useState,useEffect} from 'react'
import axios from 'axios';

function Getmoviedata() {

    const[data, setdata] = useState([]);
    
    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {data: response} = await axios.get('http://localhost:3000/getmovies');
            setdata(response);
            console.log(response);
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchData();
      }, []);
    
  return (

    <>
    <div>
    <h1>Movie Data</h1>
    <table border='1px'>
      <thead>
    <tr>
      <th>Name</th>
      <th>Rating</th>
      <th>Year</th>
      <th>Hero</th>
      <th>Heroine</th>
    </tr>
    </thead>
    <tbody>
      { data.map((r,i)=>(
        <tr key={i}>
          <td>{r.name}</td>
          <td>{r.rating}</td>
          <td>{r.year}</td>
          <td>{r.hero}</td>
          <td>{r.heroine}</td>
        </tr>
      ))}

    </tbody>
    </table>
    </div>
    </>
  )
}

export default Getmoviedata