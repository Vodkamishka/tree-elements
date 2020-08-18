import React from 'react';
import './attributes.css';

const Attributes = ({values}) => {
    const scopeLeft = '{';
    const scopeRight = '}';
    return (
        <>
            <div>attributes: [</div>
                {values.map((el, index) => {
                    const key = Object.keys(el);
                    const value = Object.values(el);
                    return (
                        <div className="attributes" key={index}>
                            <div className="attributes__scope">{scopeLeft}</div>
                            <div className="attributes__values">{`${key}: "${value}",`}</div>
                            <div className="interface-json__scope">{scopeRight}</div>
                        </div>
                    )
                })}
            <div>]</div>
        </>
    )
}

export default Attributes;