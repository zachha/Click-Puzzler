import React, { Component } from "react";
import './footer.css'

class Footer extends Component {
    render() {
        return <footer className="container-fluid w-100 bg-dark text-light py-3">
              <h5 className="text-muted" id="appName">
                Click Puzzler
              </h5>
              <h5 className="text-muted" id="email">zachha@gmail.com</h5>
          </footer>;
        
    }
};

export default Footer;
