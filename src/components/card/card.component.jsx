
import './card.styles.css';

const Card  = ({ item }) => (          
    <div className='card'>
        <h5 className='card-title p-2'>{item.name}</h5>
        <img src={`./images/hotel2.jpeg`} alt={item.name}/>
        <p className='card-text p-2'>With supporting text below as a natural lead-in to additional content.</p>
    </div>
);
    

// class Card extends Component {


//     render() {
//         return (            
            
//             <div className='card'>
//                 <h5 className='card-title p-2'>{this.props.item.name}</h5>
//                 <img src={`./images/hotel2.jpeg`}/>
//                 <p className='card-text p-2'>With supporting text below as a natural lead-in to additional content.</p>
//             </div>
//         );
//     }
// }

export default Card;