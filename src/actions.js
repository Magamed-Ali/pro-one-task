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