import '../assets/styles/Card/card.scss'

const Card = ({
  name,
  cost,
  currency,
  length,
  speed,
  speedUnits,
  optional,
  isSelected,
  color,
}) => (
  <div className={`card  ${isSelected && 'selected'}`}>
    <div className={`header ${color}`}>{name}</div>

    <div className={color}>
      <div className='cost'>
        <sup>{currency}</sup>
        <span className='cost__number'>{cost}</span>
        <sub>{`/${length}`}</sub>{' '}
      </div>
    </div>

    <div className='speed'>{`до ${speed} ${speedUnits}`} </div>

    <div className='optional'>{optional}</div>
  </div>
)

export default Card
//
