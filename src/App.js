
import { Routes, Route } from 'react-router-dom';
import Console from './components/console/console.componet';
import HotelForm from './components/hotel-form/hotel-form.component';
import Navigation from './components/navigation/nagation.component';
import Services from './components/services/services.component';

import Home from './routes/home/home.component';

const App = () => {

  return (
    <Routes>
      <Route path='/'  element={<Navigation />}>  
        <Route index element={<Home />}/> 
        <Route path='services'  element={<Services />}/> 
        <Route path='console'  element={<Console />}> 
          <Route path='hotel-form'  element={<HotelForm />}/> 
        </Route>
      </Route>     
    </Routes>
  );

} 

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = { 
//       hotels: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then(
//       (users) => this.setState(
//       () => {return {hotels: users}}
//     ));
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//       () => { return { searchField }
//     });
//   }

 
//  render() {  
//     const {hotels, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredHotels = hotels.filter((hotel) => {
//       return hotel.name.toLocaleLowerCase().includes(searchField);
//     });
    
//     return (
//       <>
//         <SearchBox onChangeHandler={onSearchChange} className='search-box' placeholder='find hotels near you'/>
//         <CardList hotels={ filteredHotels }/>
//       </>
//     );
//   }
// }

export default App;
