import {Link} from 'react-router-dom'

function Meal(props) {
  const { strMeal, idMeal, strMealThumb } = props;

  return (
    <div className="card">
    <div className="card-image">
      <img src={strMealThumb} alt={strMeal} />
    </div>
    <div className="card-content">
      <span className="card-title">{strMeal}</span>
      <p>{strMeal.slice(0, 60)}...</p>
    </div>
    <div className="card-action">
      <Link to={`/meal/${idMeal}`} className="btn">
        Watch reciepe
      </Link>
    </div>
  </div>
  )
}

export { Meal };
