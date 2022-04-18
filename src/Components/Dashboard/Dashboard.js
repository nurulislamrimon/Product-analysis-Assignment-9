import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(datas => setDatas(datas))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Statement in chart</h1>

            <div className='grid md:grid-cols-2'>

                {/* Bar chart */}
                <BarChart className='mt-[100px]'
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="month" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="sell" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>

                {/* Line chart */}

                <LineChart width={500} height={400} data={datas}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d1" />
                    <Line type="monotone" dataKey="sell" stroke="#8884d1" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>

            </div>
        </div>
    );
};

export default Dashboard;