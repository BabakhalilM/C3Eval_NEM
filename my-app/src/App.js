import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homepage';
import BookDetailsPage from './pages/bookdetails';
// import HomePage from './pages/HomePage';
// import BookDetailsPage from './pages/BookDetailsPage';

function App() {
  return (
  <>
    <HomePage/>
    <BookDetailsPage></BookDetailsPage>
    <Routes>
      {/* <Switch> */}
        <Route path="/" component={HomePage} />
        <Route path="/books/:id" component={BookDetailsPage} />
      {/* </Switch> */}
    </Routes>
  </>
  );
}


export default App;
