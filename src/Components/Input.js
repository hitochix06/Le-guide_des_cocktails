import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";


function Input(props) {

 const [cocktails, setLike] = useState(0);

 // FONCTION
 const handleInput = (e) => {
  setLike(e.target.value);
 };

 //code pour appelle les item sur BD 
 async function promise(e) {
  e.preventDefault()
  let response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktails);
  let donnes = await response.json();
  console.log(donnes.drinks);
 }

 // USE EFFECT
 // Premier chargement de page on affiche quelque chose
 useEffect(() => {
  promise();
 }, []);

 useEffect(() => {
  console.log("Like a changé");
 }, [cocktails]);

 return (
  <div>
   <h1>Le guide des cocktails</h1>
   <Card className='container' >
    <Form.Group className="mb-3 p-5" controlId="notreTache">
     <Form.Control onChange={handleInput} type="Text" placeholder="Nom d'un cocktail" />
     <Button className='boutonValide' variant="outline-primary" onClick={promise}>Recherche</Button>
    </Form.Group>
   </Card>
   <Card className='container' ><h1>sdsqdsf</h1></Card>




  </div>
 );
}

export default Input;