import dispatcher from "../dispatcher";


    export function createTodo(text){
        dispatcher.dispatchP({
            type: "CREATE_TODO",
            text,
        })

    }



    export function deleteTodo(text) {
    dispatcher.dispatchP({
        type: "DELETE_TODO",
        id,
    });

};
    export function reloadTodos(props) {

            dispatcher.dispatch({
                type: "FETCH_TODOS",
            })
           dispatcher.dispatch({type: "UPDATE_TODOS" [
              {
                    id :5353535,
                    text : "gog gosfsds",
                    complete : false 
              },
              
              {
                    id: 5353535323,
                    text : "gog gosfsds",
                    complete : false 
              }
            ]
            })
            axio(props).then(() => {
              console.log("got the data", data);
              
            });

        }




