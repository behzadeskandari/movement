import {EventEmitter} from "events";
import dispatcher  from './dispatcher';


class TodoStore extends EventEmitter {
constructor(){
    super()
    this.todos = [
      {
        id: 11111,
        text: "go go go ",
        complete: false,
      },

      {
        id: 22222,
        text: "no no no go go ",
        complete: false,
      },
    ];

}
    createTodo(){
    const id = Date.now() ;

        this.todos.push({
            id,
            text,
            complete : false,
        })
        this.emit("change"); 
    }


    getAll(){
        return  this.todoStore
    }

    handleAction(action){
        switch(action.type){
            case "CREATE_TODO": {
                this.createTodo(action.text);
            }
        }
        console.log("TODOSTORE recived an action", action);
    }

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleAction.bind(todoStore))

//for accessing the store via console in browser 
//window.todoStore = todoStore;
export default todoStore;

