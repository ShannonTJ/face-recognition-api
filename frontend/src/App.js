import React from "react";
import { data } from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand-name" href="/">
            REACT
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;