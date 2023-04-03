import React, { useState,useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';

const PhoneBar = () => {
    const [phones,setPhones]= useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const loadedData = data.data.data;
            // console.log(loadedData)
            const phoneData =loadedData.map(phone =>{
                const part =phone.slug.split('-');
                const price= parseInt(part[1])
                const phoneInfo ={
                    name : phone.phone_name,
                    price : price
                }
                return phoneInfo;
            })
           console.log(phoneData) 
           setPhones(phoneData)
        })
    },[])
    return (
        <div className='w-[600px] h-[300px]'>
            
           <ResponsiveContainer  width='100%' height='100%'>
               <BarChart width={800} height={400}
                data={phones}>
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                </BarChart>
           </ResponsiveContainer>
          
            
            
            
            
        </div>
    );
};

export default PhoneBar;