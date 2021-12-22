import React from 'react';
import { useParams } from 'react-router-dom';

import Button from './Button';

import "./TaskDetails.css"

const TasksDetails = () => {
    const params = useParams();


    return ( 
        <>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis assumenda vel iure dolores enim doloremque.
                </p>
            </div>
            <div className="back-button-contaner">
                <Button>Voltar</Button>
            </div>
        </>
     );
}
 
export default TasksDetails;