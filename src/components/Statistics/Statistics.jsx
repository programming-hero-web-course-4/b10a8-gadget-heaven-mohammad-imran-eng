import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Legend, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('productsData.json'); // Replace with your API URL
        const result = await response.json();
        const formattedData = result.map((item) => ({
          name: item.category, // Replace 'category' with your API's key for labels
          value: item.value,
          price: item.price ,
          rating: item.rating                      // Replace 'value' with your API's key for values
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-screen-lg mx-auto my-10">
            <ResponsiveContainer width="100%" aspect="3">
              <BarChart width={1000} height={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="price"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="price" fill="#8884d8" />
                <Bar dataKey="rating" fill="#FF0000" />
              </BarChart>
            </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default Statistics;
