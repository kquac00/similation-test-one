import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import IcecreamTruck from './views/IcecreamTruck';
import TodoList from './views/ToDoList';


function App() {
  // const [currentMsg, setCurrentMsg] = useState("There are no messages");

  // const youveGotMail = ( newMessage ) => {
  //   setCurrentMsg( newMessage );
  // }

  return (
    <div>
      {/* <MessageForm onNewMessage={ youveGotMail }/>
      <MessageDisplay message={ currentMsg } /> */}
      {/* <IcecreamTruck /> */}
      <TodoList />
    </div>
  );
}

export default App;
