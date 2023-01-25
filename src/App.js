import React, {useState} from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  return (
  <main>
    <section className='container'>
      <h3>
        {[people.length]} birthdays today
      </h3>
      <List people={people}/>
      <button onClick={() => setPeople([]) }>clear all</button>
    </section>
  </main>
  );
}

export default App;

/*
This is a React component called "App" that renders a "main" section with a container.

Inside the container, it displays a heading showing the length of the "people" array,
which is initially set to the data imported from the "data" file.

It also renders a "List" component, passing in the "people" array as a prop.

There is also a button that when clicked, will call the setPeople function and update the "people" state to an empty array.
The component is then exported to be used in other parts of the application.
*/