import {useState} from "react";
import CardGenerator from "./CardGenerator"

const SelectData=()=>{
    const [data, setData]= useState([]);
    const [showData, setShowData] = useState(false);
    const [valueSelect, setValueSelect]= useState('');


    const getApi = async (item) => {
        const res = await fetch(`https://swapi.dev/api/${item}`);
        const myData = await res.json();
        setData(myData.results);
        setShowData(true);
    }

    const handleVal = async (e) => {
        const seletedInfo = e.target.value;
        await getApi(seletedInfo);
        setValueSelect(seletedInfo);
    }

    return(
        <div className="selectContainer">
            <h1>¡Welcome to the StarWars Galaxy!</h1>
            <select className="selectOption" onChange={(e) => handleVal(e)}>
                <option value={''}>Select</option>
                <option value={'planets'}>Planets</option>
                <option value={'starships'}>Starships</option>
                <option value={'vehicles'}>Vehicles</option>
                <option value={'people'}>People</option>
                <option value={'species'}>Species</option>
            </select>
            {!showData && <p className="LoadingNotification">Loading...</p>}
            
            {showData && <CardGenerator data={data} cardType={valueSelect} />}
        </div>
    );
};
export default SelectData;