import React from 'react';
import './interface-json.css';
import Attributes from '../attributes/attributes';

const InterfaceJson = ({data, cut, copy}) => {
    const scopeLeft = '{';
    const scopeRight = '}';
    return <div className="interface-json">
        <div>{scopeLeft}</div>
        <div className="interface-json__data">
            <div className="interface-json__key">cut: </div>
            <div className="interface-json__value">{` ${cut}`}</div>
        </div>
        <div className="interface-json__data">
            <div className="interface-json__key">copy: </div>
            <div className="interface-json__value">{` ${copy}`}</div>
        </div>
        <div className="interface-json__json">
            <div className="interface-json__key">data: [</div>
            <div className="interface-json__value">
                {data.map(((elem, i) => {
                const keys = Object.keys(elem);
                const values = Object.values(elem);
                return (
                    <div 
                        className="interface-json__node" 
                        key={i}>
                            <div>{scopeLeft}</div>
                                <div className="interface-json__params">
                                    {keys.map((el, index) => {
                                        return <div key={index}>
                                                    {keys[index] !== 'attributes' ? `${el}: ${values[index]},` : null}
                                                    {keys[index] === 'attributes' ? <Attributes values={values[index]}/> : null}
                                                </div>
                                    })}
                                </div>
                            <div>{scopeRight},</div>
                    </div>
                )
            }))}
                </div>
            </div>
        <div className="interface-json__data">]</div>
        <div>{scopeRight}</div>
    </div>
}

export default InterfaceJson;