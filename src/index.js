import React from 'react';
import ReactDOM from  'react-dom';

 const tasks = ['take out the trash', 'take out the trash', 'walk the dog'];

// const element = React.createElement('ol',null,
// React.createElement('li', null, 'TakeOut  the Trash'),
// React.createElement('li', null, 'Shovel the driveway'),
// React.createElement('li', null, 'walk the dog'),
// tasks.map((task, index ) => React.createElement('li' , {key: index}, task))
   
// );

// const element = <ol>
//      <li>Hello Vegi</li>
//      <li>Hello Harendra</li>
//      <li>Hello Nath</li><hr></hr>
//      <li>Hello VegiHarendranath!!!</li>
// </ol>




//  const element = <ol>
//     <li>{tasks[0]}</li>
//     <li>{tasks[1]}</li>
//     <li>{tasks[2]}</li><hr></hr>
     
//  </ol>

// const element = <ol>
//     {tasks.map((task) => <li key = {task}> {task}</li>)}
// </ol>

const element = <div>
    <h1> TaskList </h1><ol>
    {tasks.map((task, index) => <li key = {index}> {task}</li>)}
</ol>
</div>

ReactDOM.render(element, document.getElementById('root'));


