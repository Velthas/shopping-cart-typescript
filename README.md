
# <img src="https://cdn-icons-png.flaticon.com/512/703/703282.png" height="70px" width="70px"> </img>WeShop - Shopping Cart  <img src="https://cdn-icons-png.flaticon.com/512/703/703282.png" height="70px" width="70px"> </img>

**Live at:** https://velthas.github.io/shopping-cart/

### Overview

Shopping Cart is meant to mimic the online shop of a clothing vendor, allowing user to browse through their merchandise, add it to cart and head for checkout, with user feedback being displayed in real time. 

This project was made to practice server-side routing using react-router-dom, as well as React's own testing library. As a bonus, I tried implementing two extra tools, being styled components and prop validation with PropTypes.

### Functionality
  
When opening the page, the user is redirected to the home page of the project. From here, they can access the different parts of the website by either interacting with the navigation bar or clicking on the 'Shop Now' button on front.

Clicking on 'Shop' on the navbar or the aforementioned 'Shop Now' button, users can get access to the most important part of this web app. When the page is displayed, users can hover on top of items to display an 'Add to Cart' button: clicking it will add the product you have chosen to the cart.

When something is added to the cart, you will notice that the navbar's cart is updated with a number, which corresponds to the number of items in it. At any time you can click on the cart to display the content, and you will see a slot for each item you have added. Items can be added any number of times you desire.

Each item slot contains the following:

 - **Amount:** this will be a number referring to the amount of the same item you are trying to buy. 
 - **Price:** is not the price of a single item of that type, but rather the price * amount of the same item you are trying to buy.
 - **Fine Tuning Icons:** you will see a plus and minus icon next to the amount: hovering will reveal they are clickable, and doing so increases or decreases the quantity.

When the user is satisfied, they can click 'Proceed to Checkout' to head for the payment, the logic for this, as per specifications, is not implemented. You also get a close cart button in case you want a quick way to dispose of the cart. 

Finally, the user can click on the 'Contacts' section of the navbar to reach the last page, which is very simplistic and just gathers icons for the most popular social media as well as an address. 

### Technologies

 - HTML, CSS, JavaScript
 - React
 - React Router Dom
 - React Testing Library
 - Styled Components
 - PropTypes
 - FakeStoreApi ( https://fakestoreapi.com/ )

### Credits
**Fonts Used:** 
 - **Vogue:** https://www.dafont.com/vladimir-nikolic.d6875
- **Bebas Neue:** from Google Fonts;
- **Montserrat:** Julieta Ulanovsky

**Icons:** 
 - **Shopping Cart:** Google Material Icons
 - **Plus Icon:** Google Material Icons
 - **Minus Icon:** Google Material Icons
 - **Readme Icon:** Freepik, Flaticon
