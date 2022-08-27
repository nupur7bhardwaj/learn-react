import React from 'react';
import './home.styles.css';

import H from '../../data/hotels';

import CardList from '../../components/card-list/card-list.component';
import SearchBox from '../../components/search-box/search-box.component';

/*const Home = () => {
  const [searchField, setSearchField] = useState('');
  const [hotels, setHotels] = useState([hotels]);
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setHotels(users));
  }, []);

  useEffect(() => {
    const newFilteredHotels = hotels.filter((hotel) => {
      return hotel.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredHotels(newFilteredHotels);
  },[hotels, searchField]);
  

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
    
  return (
    <>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <SearchBox onChangeHandler={onSearchChange} className='search-box' placeholder='find hotels near you'/>
        </div>
      </div>
      
      <CardList items={ filteredHotels }/>
    </>
  );

} */

class Home extends React.Component {

  constructor() {
    super();
    this.state = { 
      hotels: [],
      searchField: ''
    };
  }

  componentDidMount() {
    this.setState(
      () => {return {hotels: H}}
    );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => { return { searchField }
    });
  }

 
 render() {  
    const {hotels, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredHotels = hotels.filter((hotel) => {
      return hotel.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
      <>
        <SearchBox onChangeHandler={onSearchChange} className='search-box' placeholder='find hotels near you'/>
        <CardList hotels={ filteredHotels }/>
      </>
    );
  }
}

export default Home;
