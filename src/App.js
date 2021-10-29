import {useDispatch, useSelector} from "react-redux";
import {loadTodos, removetitle, removeTodo} from "./actions";
import {useEffect} from "react";
import "./style.css"

function App() {
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos())
    }, [])
    const hendleDelete = (id) => {
        dispatch(removeTodo(id))
    }
    const titleleDelete = (title)=>{
        dispatch(removetitle())
    }
    return (
        <div>
            Cписок дел:
            {loading ? "идет загрузка" : ''}
            <div className="objectName">
                {todos.map(todo => {
                    return (
                        <div className={`${"userСard"} ${todo.id > 3 && todo.id < 10 ? "blockRed" : "blockGold"}`}>
                            <div className="cardСontents"><p> Пользователь по счету № {todo.id}</p></div>
                            <div><button onClick={()=> titleleDelete(todo.title)}>уд по заг</button></div>
                            <div className="cardСontents"><p>Заголовок</p> {todo.title}</div>
                            <div className="cardСontents"><p>Содержание</p>{todo.body}</div>
                            <div className="action">
                                <button onClick={()=> hendleDelete(todo.id)}>delite</button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default App;