import './App.css'
import MyNewTask from './Profile';
import MyTask2 from './task2';
import MyTask3 from './task3';
import MyTask4 from './task4';


export default function App() {
  let myCar = {
    model: 2005,
    make: 'Toyota',
    varient: 'SE Saloon',
    seatingCapicity: '5',
    engine: '1500cc',
    color: 'Red Matt'
  };

  return (
    <>
      <div>
        <MyNewTask car={myCar} />
      </div>


      <div>
        <MyTask2 make='2005' />
      </div>

     <div>
      <MyTask3 > 
        <p>THis is P graph</p>
        <p>THis is P graph</p>

        <p>THis is P graph</p>+

      </MyTask3>

     </div>


     <div>
      <MyTask4>
      <h1>This is Task 4</h1>
      </MyTask4>
     </div>
    </>
  );
}