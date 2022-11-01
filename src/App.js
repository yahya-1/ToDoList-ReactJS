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
