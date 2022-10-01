import React from 'react';

export default function ListData (props) {
    return (
        <>
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" onClick={() => props.check(props.data.id)} />
                    <label className="form-check-label">{props.data.title}</label>
                    <button className='rounded-circle' onClick={() => props.delete(props.data.id)}>Delete</button>
                </li>
            </ul>
        </div>
        </>
    )
}