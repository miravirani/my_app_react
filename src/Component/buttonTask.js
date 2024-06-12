import { useEffect, useState } from 'react';

function ButtonTask() {
    let [titel, setTitle] = useState('');
    let [taskList, setTaskList] = useState([]);
    let [counter, setCounter] = useState(0);
    let [flagEditing, setFlagEditing] = useState('');
    let [showAlert, setShowAlert] = useState(false);
    let [selectAll, setSelectAll] = useState(false);
    let [deleteAll, setDeleteAll] = useState([]);

    const handleCheckboxChange = (taskId) => {
        if (deleteAll.includes(taskId)) {
            setDeleteAll(deleteAll.filter(id => id !== taskId));
        } else {
            setDeleteAll([...deleteAll, taskId]);
        }
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <input
                    type='text'
                    placeholder='Enter your taxt'
                    onChange={(e) => {
                        e.preventDefault()
                        setTitle(e.target.value)
                    }}
                    value={titel}
                />

                <button onClick={(e) => {
                    e.preventDefault();
                    if (titel.trim() === '') {
                        setShowAlert(true);
                        return;
                    }

                    if (flagEditing) {
                        flagEditing.taskTitle = titel;
                        setTaskList(
                            taskList.map((value, index) => {
                                if (value.id === flagEditing.id) {
                                    value = flagEditing
                                }
                                return value
                            })
                        )
                        setFlagEditing(null)
                        // setTaskList([titel, ...taskList]);

                    } else {
                        setTaskList([...taskList, {
                            taskTitle: titel,
                            id: counter
                        }]);
                        setCounter(++counter);
                    }
                    setTitle('');
                    setShowAlert(false)
                }
                }>
                    Click Me!
                </button>

                {titel && !flagEditing && <button onClick={(e) => {

                    e.preventDefault();
                    setTitle('');
                }}>
                    Remove
                </button>}

                {showAlert && (
                    <p style={{
                        border: '2px solid black',
                        margin: '10px',
                        color: 'black',
                        top: '40px',
                        right: '30px',
                        position: 'fixed',
                        padding: '10px'
                    }}> Please Enter your text. </p>)}

                <button onClick={(e) => {
                    e.preventDefault();
                    setSelectAll(!selectAll);
                }}>
                    Select
                </button>

                {selectAll && <button onClick={(e) => {
                    e.preventDefault()
                    const newTaskList = taskList.filter(task => !deleteAll.includes(task.id));
                    setTaskList(newTaskList);
                    setDeleteAll([]);
                }}>
                    Delete Selected
                </button>}


            </div>

            <div>
                {taskList.map((value, index) => {
                    return (
                        <div key={index + value.id} style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>

                            {selectAll && <input
                                type="checkbox"
                                onChange={(e) => {
                                    e.preventDefault()
                                    handleCheckboxChange(value.id)
                                }}
                            />}

                            <h3>{value.taskTitle}</h3>

                            <button onClick={(e) => {
                                e.preventDefault()
                                const newArray = [...taskList];
                                newArray.splice(index, 1);
                                setTaskList(newArray);
                                setTaskList([...taskList].splice(1))
                            }} style={{ width: '8%', height: '25px' }}>
                                Delete
                            </button>

                            <button onClick={(e) => {
                                e.preventDefault()
                                setTitle(taskList[index].taskTitle);
                                setFlagEditing(taskList[index]);
                                // setTitle(value.taskTitle);
                                // setFlagEditing(value);
                            }} style={{ width: '8%', height: '30px' }}>
                                Edit
                            </button>

                            {flagEditing && flagEditing.id === value.id && (
                                <button

                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTitle("");
                                        setFlagEditing(null);
                                    }}
                                    style={{ width: '8%', height: '30px' }}
                                >
                                    Close
                                </button>
                            )}

                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default ButtonTask;