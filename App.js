import logo from './logo.svg';
import './App.css';
import Price from "./price";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function App() {
  let pricetab = [
    {cardtitle: "free", price: "$2",
    listItems: [{itemName : "Single User",isDisabled : false},
      {itemName : "5GB Storage",isDisabled : false},
      {itemName : "Unlimited Public Projects",isDisabled : false},
      {itemName : "Community Access",isDisabled : false},
      {itemName : "Unlimited Private Projects",isDisabled : true},
      {itemName : "Dedicated Phone Support",isDisabled : true},
      {itemName : "Free Subdomain",isDisabled : true},
      {itemName : "Monthly Status Reports",isDisabled : true}]},

      {cardtitle: "Plus", price: "$9",
    listItems: [{itemName : "5 Users",isDisabled : false},
      {itemName : "50GB Storage",isDisabled : false},
      {itemName : "Unlimited Public Projects",isDisabled : false},
      {itemName : "Community Access",isDisabled : false},
      {itemName : "Unlimited Private Projects",isDisabled : false},
      {itemName : "Dedicated Phone Support",isDisabled : false},
      {itemName : "Free Subdomain",isDisabled : false},
      {itemName : "Monthly Status Reports",isDisabled : true}]},

      {cardtitle: "pro", price: "$49",
    listItems: [{itemName : "Unlimited Users",isDisabled : false},
      {itemName : "150GB Storage",isDisabled : false},
      {itemName : "Unlimited Public Projects",isDisabled : false},
      {itemName : "Community Access",isDisabled : false},
      {itemName : "Unlimited Private Projects",isDisabled : false},
      {itemName : "Dedicated Phone Support",isDisabled : false},
      {itemName : "Unlimited Free Subdomains",isDisabled : false},
      {itemName : "Monthly Status Reports",isDisabled : false}]},
  ];
  return (
    <>
    <div style={{padding: 30, background: "linear-gradient(to right, royalblue, skyblue)"}}>
    <div class="container">
    <div class="row">
    {
      pricetab.map((product) =>{
        return <Price data={product}></Price>
      })
    }
    </div>
    </div>
    </div>
    </>
  );
}
export default App;
