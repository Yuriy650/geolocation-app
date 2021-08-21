import React, {useEffect, useState} from 'react';
import './App.scss';
import {IpGeolocationData} from "./interfaces";
import Content from "./Content/Content";
import '@fontsource/roboto';

function App() {
    const [data, setData] = useState<IpGeolocationData[]>([]);
    const [tempIp, setTempIp] = useState<string>('');
    const [ip, setIp] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
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
                <div className="app-container__form">
                    <div className="app-container__form-title">
                        <div className="app-container__image"> </div>
                        <p className="app-container__title">Find My IP</p>
                    </div>
                    <form>
                        <input
                            type="text"
                            className="app-container__form-input"
                            placeholder="IP"
                            name="comment"
                            value={tempIp}
                            onChange={(e) => setTempIp(e.currentTarget.value)}/>
                        <button type="button" className="app-container__form-btn"
                                onClick={() => setIp(tempIp)}>Search
                        </button>
                    </form>
                </div>
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
