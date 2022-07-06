import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Layout,
  AlertOnMount,
  Counter,
  RadnomNumGenerator,
  MemoOperation,
  PizzaConfigurator,
} from 'assignment';

function App() {
  // return <Example1 />;
  //return <Example2 />;
  //return <Example3 />;
  //return <Example4 />;
  //return <Example5 />;
  // return <Example6 />;
  //return <Example7 />;
  //return <Example8 />;
  //return <Example9 />;
  //return <Example10 />;
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<AlertOnMount />} />
          <Route path='1' element={<Counter />} />
          <Route path='2' element={<RadnomNumGenerator />} />
          <Route path='3' element={<MemoOperation />} />
          <Route path='4' element={<PizzaConfigurator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
