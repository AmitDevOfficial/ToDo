import React from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function MyToDo(props) {
    
    return (
        <div>
            <div><CloseRoundedIcon className='dlt' onClick={() => props.onSelect(props.id)}/><li>{props.txt}</li></div>
        </div>
    )
}
