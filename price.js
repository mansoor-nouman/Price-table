import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function Price(p) {
  return <div className="col-lg-4" style={{}}>
      <div className="card mb-5 mb-lg-0" style={{borderRadius: 30}} >
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {p.data.cardtitle}
          </h5>
          <h1 className="card-price text-center">
            {p.data.price}<span style={{fontSize: 14}}>/month</span>
          </h1>
          <hr/>
          <ul className="fa-ul">
            {p.data.listItems.map((item) => {
              return !item.isDisabled?
              <li><span className="fa-li"><FontAwesomeIcon icon={faCheck}/></span>
              {item.itemName}</li>:
              <li><span className="fa-li text-muted"><FontAwesomeIcon icon={faTimes}/></span>
              {item.itemName}</li>
            })}
            
          </ul>
          <a href="#" className="btn btn-block btn-primary text-uppercase" style={{borderRadius: 30}} >
            Button
          </a>
          
        </div>
      </div>
    </div>
  
}

export default Price;
