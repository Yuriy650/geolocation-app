import React, {useEffect, useState} from 'react';
import './App.scss';
import {IpGeolocationData} from "./interfaces";
import Content from "./Content/Content";
import '@fontsource/roboto';
import FormIp from "./FormIp/FormIp";

function App() {
    const [data, setData] = useState<IpGeolocationData[]>([]);
    const [ip, setIp] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const handleIp = (newIp: string) => {
        setIp(newIp)
    }
    useEffect(() => {
        const arr: IpGeolocationData[] = [];
        //eslint-disable-next-line
        fetch(`https://ipapi.co/` + `${ip}` + `/json/`)
            .then(response => response.json())
            .then(json => {
                    setIsLoaded(true)
                    arr.push(json);
                    setData(arr)
                },
                (error) => {
                    setIsLoaded(true)
                    console.log(error.message)
                    setError(error.message);
                })
    }, [ip])
    return (
        <div className="app-container">
            <div className="app-container__body">
                <FormIp
                    handleIp={handleIp}/>
                <Content
                    data={data}
                    error={error}
                    isLoaded={isLoaded}
                    ip={ip}/>
            </div>
        </div>
    );
}

export default App;
