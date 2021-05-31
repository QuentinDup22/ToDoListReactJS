import React from 'react';
import NavBar from './NavBar';
import ToDoList from './ToDoList';
import AddTask from './AddTask';

class App extends React.Component{
    render(){
        return(
            <section>
                <ToDoList />
                <AddTask />
                <NavBar />
            </section>
        )
    }
}

export default App