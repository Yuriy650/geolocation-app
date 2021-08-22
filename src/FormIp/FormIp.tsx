import React, {useState} from 'react';
import './formIp.scss'
const FormIp = (props: any) => {
    const [tempIp, setTempIp] = useState<string>('');
    return (
        <div className="container">
            <div className="container__form-title">
                <div className="container__image"> </div>
                <p className="container__title">Find My IP</p>
            </div>
            <form className="form-items">
                <input
                    type="text"
                    className="container__form-input"
                    placeholder="IP"
                    name="comment"
                    value={tempIp}
                    onChange={(e) => setTempIp(e.currentTarget.value)}/>
                <button type="button" className="container__form-btn"
                        onClick={() => props.handleIp(tempIp)}>Search
                </button>
            </form>
        </div>

    )
}
export default FormIp;

