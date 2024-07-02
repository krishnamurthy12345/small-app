// --------------------------------Register----------------------
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Home from './Fill/Home';
// // import Create from './Fill/Create';
// // import Update from './Fill/Update'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Register from './Register/Register';
// import Nav from './Register/nav';
// import Table from './Register/table';
// import Updateform from './Register/updateform';
// // import Country from './Country/country';
// // import FormComponent from './Form/Validate';
// // import Action from './Form/add';


//  function App() {
//    return ( 
//      <>

//     {/* <Country/>  */}
    
//  <BrowserRouter>
//      <Routes>
//        <Route path='/' element={[<Nav/>,<Register/>,]}/>
//        <Route path='/goes' element={<Table/>}/>
//        <Route path='/reg' element={<Updateform/>}/>
//      </Routes>
//      </BrowserRouter> 



//     {/* <BrowserRouter>
//      <Routes>
//        <Route path='/' element={<Home/>}/>
//        <Route path='/create' element={<Create/>}/>
//        <Route path='/update' element={<Update/>}/>
//      </Routes>
//      </BrowserRouter>  */}
//    </>
//   );
// }


// export default App;







// // --------Curd_op------------------------------------------
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from './Curd_op/reg';
// import Login from './Curd_op/login';
// import Dashboard from './Curd_op/Dashboard';
// import Update from './Curd_op/Update';

// function App() {
//   return (
//    <>
//     <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Register />} />
//           <Route path='/Login' element={<Login />} />
//           <Route path='/Dashboard' element={<Dashboard/>} />
//           <Route path='/Update/:id' element={<Update/>} />
      
//       </Routes>
//       </BrowserRouter>
   
//    </>
//   );
// }

// export default App;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Landpage } from './Form/landpage';
// import { Nav } from './Form/nav';
// import { Admin } from './Form/Admin';
// import { Editmodule } from './Form/Edit';
// import { Singledata } from './Form/singleuser';
// import { Validate } from './Form/Validate';

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Nav/>}/>
//       <Route path='/home' element={<Landpage/>}/>
//       <Route path='/admin' element={<Admin/>}/>
//       </Routes>
//       </BrowserRouter>
//       <Editmodule/>
//       <Singledata/>
//       <Validate/>

//     </>
//   )
// }

// export default App




// --------------user-------------------------

// import React from 'react';
// import './Curd/main.css';
// import Create from './Curd/Create';
// import Read from './Curd/Read';
// import Update from './Curd/Update';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'


// function App() {
//   return (
//     <>
//     <div className='main'>
//     <BrowserRouter>
//     <Routes>
//       <Route path='/create' element={<Create/>}/>
//       <Route path='/read' element={<Read/>}/>
//       <Route path='/update' element={<Update/>}/>
//       </Routes>
//       </BrowserRouter>
//     </div>
//     </>
  
//   )
// }

// export default App;


// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
// import Reg1 from './user/register'; 
// import UpdateUser from './user/update'; 

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Reg1 />} />
//           <Route path="/update/:id" element={<UpdateUser />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Admin/Counter';
// import Driver from './Admin/Driver';
// import Mainbar from './Admin/Mainbar';
// import Main from './Admin/main';
// import Farepage from './Admin/Farepage';
// import Form from './Admin/Form';
const App = () => {
  return (
   <>
   {/* <Main/> */}
   {/* <Farepage/> */}
   {/* <Form/> */}
   {/* <Mainbar/> */}
   {/* <Driver/> */}
   <Counter/>
  
   </>
  );
};

export default App;

