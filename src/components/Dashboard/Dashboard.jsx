import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const myArray = [
        {
          id: 1,
          name: "John",
          physics: 75,
          math: 80,
          chemistry: 90
        },
        {
          id: 2,
          name: "Jane",
          physics: 85,
          math: 95,
          chemistry: 80
        },
        {
          id: 3,
          name: "Bob",
          physics: 60,
          math: 70,
          chemistry: 75
        },
        {
          id: 4,
          name: "Alice",
          physics: 90,
          math: 85,
          chemistry: 95
        },
        {
          id: 5,
          name: "David",
          physics: 80,
          math: 90,
          chemistry: 70
        },
        {
          id: 6,
          name: "Sara",
          physics: 95,
          math: 80,
          chemistry: 85
        },
        {
          id: 7,
          name: "Tom",
          physics: 70,
          math: 60,
          chemistry: 80
        },
        {
          id: 8,
          name: "Emily",
          physics: 75,
          math: 70,
          chemistry: 75
        },
        {
          id: 9,
          name: "Mike",
          physics: 85,
          math: 90,
          chemistry: 95
        },
        {
          id: 10,
          name: "Jessica",
          physics: 80,
          math: 85,
          chemistry: 80
        },
        {
          id: 11,
          name: "Alex",
          physics: 70,
          math: 75,
          chemistry: 60
        },
        {
          id: 12,
          name: "Olivia",
          physics: 90,
          math: 95,
          chemistry: 85
        }
      ];
      
    return (
        <div>
            <LineChart
            width={1000}
            height={300}
            data={myArray}
            >
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="physics" ></Line>
                <Line dataKey="math" ></Line>
                <Tooltip></Tooltip>
            </LineChart>
            
        </div>
    );
};

export default Dashboard;