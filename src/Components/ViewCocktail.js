import { Card, ListGroup } from "react-bootstrap";

function ViewCocktail(props) {

 return (
  <div className="card-container d-flex flex-wrap justify-content-center">
   {props.cocktailData.map((cocktail) => (
    <Card className="text-center affiche">
     <Card.Img variant="top" src={cocktail.strDrinkThumb} />
     <Card.Body>
      <Card.Title>{cocktail.strDrink}</Card.Title>
      <ListGroup variant="flush">
       <strong>Ingrédients :</strong> {cocktail.strIngredient1},{" "}
       {cocktail.strIngredient2},{cocktail.strIngredient3},{" "}
       {cocktail.strIngredient4},{cocktail.strIngredient5},{" "}
       {cocktail.strIngredient6},{cocktail.strIngredient7},{" "}
       <ListGroup.Item>{cocktail.strInstructions}</ListGroup.Item>
      </ListGroup>
     </Card.Body>
    </Card>
   ))}
  </div>
 );
}

export default ViewCocktail;