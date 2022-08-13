import NavBar from "./NavBar"
import React from 'react';
import '../styles/contact.css';
import img from '../assets/img.background.form.webp';
import img2 from '../assets/img.background.form1.webp';


function Contact() {
    //On crée trois state afin de stocker les valeurs entré par l'utilisateur dans le formulaire
    const [name, setName] = React.useState();   
    const [firstName, setFirstName] = React.useState();
    const [recommendation, setRecommendation] = React.useState()
   

    //On crée une fonction qui renverra un message lors du click
    function handleClick(e){  
        e.preventDefault()
        alert("Thank you for your message.")
    }

    return(
        <div className='divContactForm'>
            <NavBar/>
            <img className='img1' src={img}/>
            <img className='img2' src={img2}/>
            <div className='divForm'>
                <h1 className='h1Form'>Contact form</h1>
                <div className='paragraphForm'>
                    <p>A cocktail idea or simply a recommendation to help us to improve 
                        our site, don't hesitate to send us a message</p>
                </div>
                <form className='form'>
                    <label className='labelForm' htmlFor='nom'>Name</label> 
                    <input className='inputForm' type="text" id="nom" name="nom" value={name} onChange={e => setName(e.target.value)}/>
                    {/*On stock la valeur de name grace dans le state*/}
                    <label className='labelForm' htmlFor='prenom'>Firstname</label> 
                    <input className='inputForm' type="text" id="prenom" name="prenom" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                    {/*On stock la valeur de firstname dans le state*/}
                    <label className='labelForm' htmlFor='texte'> Recommandation</label> 
                    <textarea className='textareaForm' type="area" id="nom" name="nom" placeholder=" One recipe? ... One cocktail?" value={recommendation} onChange={e => setRecommendation(e.target.value)} />
                    {/*On stock la valeur de recommendation dans le state*/}
                    <button className='buttonForm' onClick={handleClick}>Submit</button> 
                    {/*On rappel la fonction "handleClick" afin d'afficher le message lors du click*/}
                </form>
            </div>
        </div>
    )
}

export default Contact;