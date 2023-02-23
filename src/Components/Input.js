import { Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import '../Style/Input.css';
import ViewCocktail from './ViewCocktail';


function Input(props) {
 const [cocktails, setLike] = useState(0);
 const [cocktailData, setCocktailData] = useState([]);
 const [error, setError] = useState(false);

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
  if (data.drinks) {
   setCocktailData(data.drinks);
   setError(false);
  } else {
   setError(true);
  }
 }

 // USE EFFECT
 // Premier chargement de page on affiche quelque chose
 useEffect(() => {
  promise();
 }, []);

 useEffect(() => { }, [cocktails]);

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
     <Button
      className="boutonValide"
      variant="outline-primary"
      onClick={promise}
     >
      Recherche
     </Button>
    </Form.Group>
   </Card>
   {error ? (
    <p className="text-center">Aucun résultat trouvé.</p>
   ) : (
    <ViewCocktail cocktailData={cocktailData} />
   )}
  </div>
 );
}

export default Input;