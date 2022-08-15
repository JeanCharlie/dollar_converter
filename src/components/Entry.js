import React, { useRef, useState } from 'react';
import Result from './Result';

function Entry() {

    const [result, setResult] = useState({
        euro: '',
        pounds_sterling: ''
    });

    const refe = useRef(null);

    function convertResult(e) {
        e.preventDefault();
        let r = refe.current.value;

        setResult({
            euro: r * 0.98,
            pounds_sterling: r * 0.82
        })


    }

    return (
        <>
            <div className='card card-body'>
                <form onChange={convertResult}>
                    <h1 className='text-center'>Enter Dollar Below</h1>
                    <br></br>
                    <div className='form-group'>
                        <input ref={refe} placeholder='' />
                    </div>
                    <br></br>
                </form>

            </div>
            <div className='resultados'>
                <Result sending={'Euro: ' + result.euro} />
                <Result sending={'Pounds Sterling: ' + result.pounds_sterling} />
            </div>

        </>
    );
}
export default Entry;