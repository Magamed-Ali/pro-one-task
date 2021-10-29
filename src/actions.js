export function loadTodos() {
    return function (dispatch) {
        dispatch({type: 'started'})
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'load',
                    payload: json,
                })
            })
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then(json => {
                dispatch({
                    type: 'delete',
                    payload: id
                })
            })
    }
}
export const removetitle = (title) => {
    return (dispatch) =>{
        fetch(`https://jsonplaceholder.typicode.com/photos/`)
    }
}