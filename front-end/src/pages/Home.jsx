import React, { useEffect, useState } from 'react';
import Item from '../components/Item'
import axios from 'axios';

const Home = () => {
  const [places, setPlaces] = useState([])
    
    useEffect(() => {
    const axiosGet = async () => {
      const { data } = await axios.get("/places");
        setPlaces(data)
    };

    axiosGet();
  }, []);

  return (
    <section>
      <div className="gap-8 grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] mx-auto max-w-full p-8 lg:max-w-7xl">
        {places.map(place => (
          <Item {...{ place }} key={place._id}/>
        ))}
      </div>
    </section>
  )
}

export default Home