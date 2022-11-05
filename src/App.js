import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css';
import './App.css';
import AddToDo from './component/add_todo/AddToDo';
import ListToDo from './component/todo_list/ListToDo';

function App() {
  return (
    <div className="page-container d-flex justify-content-center pt-5">
      <div className='container'>
        <AddToDo />
        <ListToDo />
      </div>
    </div>
  );
}

export default App;


//# Required :-
// 1- Create component of the project by using the antd UI library
// 2- Handle redux library and react redux to emulate real api with localStorage


//# Steps to ADD task to localStorage using redux :-
// 1- Forming the state with function reducer after linking it to the store.
// 2- Calling the action of the data load sent by component input when the Add task button is pressed,
// to be linked in the redux function's type add to change the state.
// 3- The data sent to localStorage is added and then checked that there is no empty data and
// then the completion value is set to an error value.

//# Steps to GET task to localStorage using redux :-
