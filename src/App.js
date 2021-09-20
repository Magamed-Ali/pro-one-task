import React, {useEffect, useState} from 'react';
import "./style.css"

function App(props) {
    const [user, setUser] = useState([])
    const [illumination, setIllumination] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                setUser(list)
            })
    }, [])

    return (
        <div >
            <div className="title">Список</div>
            <div className="userCard">
                {user.map(item => {
                    return (

                        <div className="bloc">
                                <div className={`${"cards"} ${item.completed ? "red" : " aqua "}`}>
                                    <div>пользователь{item.userId}</div>
                                    <div>ID {item.id}</div>
                                    <div>Title{item.title}</div>
                                    <div> истенность {item.completed ? " True " : " False "}</div>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;