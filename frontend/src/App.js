import React from "react";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand-name" href="index.html">
            REACT
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          <div class="card">
            <a href="product.html">
              <img class="medium" src="./images/p1.jpg" alt="product" />
            </a>
            <div class="card-body">
              <a href="product.html">
                <h2>Nike Slim Shirt</h2>
              </a>
              <div class="rating">
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
                <span>
                  <i class="fa fa-star"></i>
                </span>
              </div>
              <div class="price">$29.99</div>
            </div>
          </div>
        </div>
      </main>
      <footer class="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
