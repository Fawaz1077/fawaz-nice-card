import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class FawazNiceCard extends LitElement {
    static get properties() {
      return {
        name: {
          type: String,
          reflect: true
        },
        fname: { type: String},
        position: {
          type: String,
        },
        top: { type: String},
        titeWelcome: { type: String},
      }
    }

    static get styles() {
      return css`
  .card {
    width: 300px;
    height: 400px;
    margin: 30px auto;
    border-radius: 10px;
    box-shadow: 2px 2px 8px #ccc;
    background-color: #f9f9f9;
    overflow: scroll;
  }
  
  div {
    padding: 10px;
  }
  
  .card img {
    display: block;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 18px;
  
    object-fit: cover;
    transition: all 0.2s ease-in-out;
  }
  
  img:hover {
    transform: scale(1.3);
  }
  
  body {
    background-color: #80afcd;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    padding: 50px;
    align-items: center;
    min-height: 100vh;
    line-height: 1.4;
  }
  
  .card h2 {
    margin: 4px;
    font-size: 21px;
    font-weight: bold;
    text-align: center;
  }
  
  .card p {
    margin: 20px;
    font-size: 18px;
    text-align: center;
  }
  
  .cool-button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
  }
  
  .cool-button:hover {
    background-color: red;
    color: black;
    transform: scale(1.1);
    text-decoration: none;
  }
  #duplicate {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 5%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  #duplicate:hover,
  #duplicate:focus {
    background-color: white;
    color: pink;
  }
  
  #change-color {
    background-color: pink;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    position: absolute;
    top: 11%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  #change-color:hover,
  #change-color:focus {
    background-color: white;
    color: pink;
  }
  
  #change-text {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 17%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  #change-text:hover,
  #change-color:focus {
    background-color: white;
    color: pink;
  
    text-decoration: none;
  }
  
  .delete {
    background-color: pink;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    display: block;
    margin: auto;
    text-decoration: none;
    position: absolute;
    top: 23%;
    left: 70%;
    transform: translate(-50%, -50%);
    font-weight: bold;
  }
  
  .delete:hover,
  .delete:focus {
    background-color: white;
    color: pink;
  
    text-decoration: none;
  }
  
  @media (max-width: 800px) and (min-width: 500px) {
    .card button {
      display: block;
    }
  }
  
  @media (max-width: 500px) {
    .card {
      width: 90%;
    }
  }
  

  `;
    }

  constructor() {
    super();
    this.header = 'My app';
    this.name = "Welcome";
  
    
  
  }

  render() {
    return html`
    <div class="card">
      
    <img src="https://i.pinimg.com/564x/c4/81/c0/c481c067ad2e11fab13ffe39bc0fd975.jpg" alt="Card Image">
    <meme-maker image-url="https://i.pinimg.com/736x/4d/7c/72/4d7c722291a2f73af96d808395a25f0b.jpg"
            top-text="My honest reaction"
            bottom-text="to that information"
            font-size="28px"></meme-maker>

   
   <h2>${this.name}</h2>
  

   <details class="details">
  <p>I was tasked with making a card for this class. I decided to keep it simple and nice. I also decided to add my handsome face to it. </p>
  </details>
  </div>
    `;
  }
}

customElements.define('fawaz-nice-card', FawazNiceCard);

