import React,{useEffect,useState} from 'react';
import { PieChart } from "reaviz";
import axios from "axios"
const data = [
    { key: 'IDS', data: 14 },
    { key: 'Malware', data: 5 },
    { key: 'DLP', data: 18 }
  ];


function App() {
    const [notes,setNotes]=useState([{
        end_year: '',
        intensity: '',
        sector: '',
        topic: '',
        insight: '',
        url: '',
        region: '',
        start_year:'',
        impact: '',
        added:'' ,
        published: '',
        country: '',
        relevance: '',
        pestle: '',
        source:'' ,
        title : '',
        likelihood: ''

    }])

    useEffect(async () =>  {
        axios.get("http://localhost:3002/").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));


    })
    return (
        <div>

<BarChart width={350} height={250} data={data} />
        </div>
    )
}

export default App


