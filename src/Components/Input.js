import { Form, Button, Card, ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import '../Style/Input.css';

function Input(props) {
 const [cocktails, setLike] = useState(0);
 const [cocktailData, setCocktailData] = useState([]);

 // FONCTION
 const handleInput = (e) => {
  setLike(e.target.value);
 };

 //code pour appelle les item sur BD
 async function promise(e) {
  e.preventDefault();
  let response = await fetch(
   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktails
  );
  let data = await response.json();
  setCocktailData(data.drinks);
 }

 // USE EFFECT
 // Premier chargement de page on affiche quelque chose
 useEffect(() => {
  promise();
 }, []);

 useEffect(() => {
 }, [cocktails]);

 return (
  <div>
   <h1>Le guide des cocktails</h1>
   <Card className="container">
    <Form.Group className="mb-3 p-5" controlId="notreTache">
     <Form.Control
      onChange={handleInput}
      type="Text"
      placeholder="Nom d'un cocktail"
     />
     <Button className="boutonValide" variant="outline-primary" onClick={promise}>
      Recherche
     </Button>
    </Form.Group>
   </Card>

   <div>
    <div className="card-container d-flex flex-wrap justify-content-center">
     {cocktailData.map((cocktail) => (
      <Card className="text-center affiche">
       <Card.Img variant="top" src={cocktail.strDrinkThumb} />
       <Card.Body>
        <Card.Title>{cocktail.strDrink}</Card.Title>
        <ListGroup variant="flush">
        <strong>Ingrédients :</strong> {cocktail.strIngredient1},{" "}
                      {cocktail.strIngredient2},{" "}
                      {cocktail.strIngredient3},{" "}
                      {cocktail.strIngredient4},{" "}
                      {cocktail.strIngredient5},{" "}
                      {cocktail.strIngredient6},{" "}
                      {cocktail.strIngredient7},{" "}
         <ListGroup.Item>
          {cocktail.strInstructions}
         </ListGroup.Item>
        </ListGroup>
       </Card.Body>
      </Card>
     ))}
    </div>
   </div>


  </div>
 );
}

export default Input;