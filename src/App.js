import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './router/TodoForm';
import UpdateForm from './router/UpdateForm';
import Navigation from './components/Navigation'
import Main from './router/Main';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
   <Routes>
      <Route path={"/"} element={<Main/>}/>
      <Route path={"/insert"} element={<TodoForm/>}/>
      <Route path={"/detail/:id"} element={<UpdateForm/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
