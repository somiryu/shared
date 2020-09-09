import React, { useEffect, useState } from 'react';
 import './Flash.css';

const Flash = () => {
	let [visibility, setVisibility] = useState(false);
	let [message, setMessage] = useState('');
	let [type, setType] = useState('');

	useEffect(() => {
		window.EM.addListener('flash', ({message, type}) => {
			setVisibility(true);
			setMessage(message);
			setType(type);
			setTimeout(() => {
				setVisibility(false);
			}, 4000);
		});
	}, []);

	useEffect(() => {
		if(document.querySelector('.closeFlash') !== null) {
			document.querySelector('.closeFlash').addEventListener('click', () => setVisibility(false));
		}
	})

    return (
        visibility && <div className={`alert alert-${type}`}>
                <span className="closeFlash"><strong>X</strong></span>
                <p>{message}</p>
            </div>
    )
}

export default Flash;