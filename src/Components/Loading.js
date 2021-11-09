import React from 'react';
import Loader from 'react-loader-spinner';

function Loading() {
    return (
        <div style={{display: 'flex', height: '100vh', justifyContent: 'center'}}>
            <Loader type="Circles" color="white" height={80} width={80}/>
        </div>
    )
}

export default Loading