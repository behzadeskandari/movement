import React from 'react'
import Todo from './Todo'
import * as TodoActions from './actions/TodoActions';
import TodoStore from './TodoStore';
import todoStore from './TodoStore';

// export default class Featured extends React.Component {
//   constructor() {
//     super();
//     this.getTodos = this.getTodos.bind(this);
//     this.state = {
//       todos: TodoStore.getAll(),
//     };
//   }

//   componentWillMount() {
//     TodoStore.on("change", this.getTodos);
//     console.log("count", todoStore.listenerCount("change"));
//   }
//   componentWillUnmount(){
//     TodoStore.removeListener("change", this.getTodos); 
//   }
//   getTodos(){
//     this.setState({
//     todos: TodoStore.getAll(),
//     });
//   }
//   createTodo(){
//         TodoActions.createTodo(Date.now)
//   }
//   reloadTodos(){
//       TodoActions.reloadTodos(Date.now());
//   }
 
//   render() {
//     const { todos } = this.state;

//     const TodoComponents = todos.map((todo) => {
//       return <Todo key={todo.id} {...todo} />;
//     });
//     return (
//       <div>
//         <h1>todo</h1>
//         <button onClick={this.createTodo.bind(this)}> Create</button>
//         <input />

//         <ul> {TodoComponents}</ul>
//         {props.children}
//       </div>
//     );
//   }
// }

export default Component