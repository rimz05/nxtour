import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ans, setAns] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://172.105.55.211/api/testApi.php?type=getHolidayPackage');
      console.log(res.data.data); 
      setAns(res.data.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container m-auto pt-4 flex justify-center bg-[#320DA8] w-full">
      <ul className="flex flex-col gap-8">
        {ans.map((item, index) => (
          <li key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-[360px]">
            <div className="flex flex-col justify-center gap-4 p-4">
              <div className="flex justify-center">
                <img
                  src={item.images}
                  alt={item.title}
                  className="object-contain w-full h-[50vh] rounded-lg"
                />
              </div>
              <div className="text-3xl font-bold underline text-blacktext-center flex justify-center">{item.title}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
