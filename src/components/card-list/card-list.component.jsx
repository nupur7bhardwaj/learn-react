import { Component } from 'react';

import Card  from '../card/card.component';

/* const CardList = ({ items }) => (
    <div className="row">
        {items.map((item, index) => {
            return <div className='col-3 mt-2' key={index}><Card item={item}/></div>;
        })}
    </div>
) */


class CardList extends Component {

    render () {
        console.log(this.props)
        return (
            <div className="row">
            {
            this.props.hotels.map(
              (hotel, index) => {
                return (<div className='col-3 mt-2' key={index}><Card item={hotel}/></div> );
            })
             }
            </div>
        )
    }

}

export default CardList;