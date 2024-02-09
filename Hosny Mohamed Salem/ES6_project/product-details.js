
    // Function to parse URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
      }
  
      async function fetchData(url) {
          try {
              const response = await fetch(url);
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Error fetching data:', error);
              return null;
          }
  }
  
      // Function to display product details
      async function displayProductDetails() {
        const productId = getUrlParameter('id');
       // const product = getProductById(productId); // Assuming you have a function to fetch product details by ID
        
          const product = await fetchData(`https://fakestoreapi.com/products/${productId}`);
        if (product) {
          const productDetailsContainer = document.getElementById('product-details');
          productDetailsContainer.innerHTML = `
          <div style="width:100%;">
              <div class="product-details">
               <h2>${product.category}</h2>
              <img src="${product.image}" id="productimg">
               <strong>Price: ${product.price} $</strong>
               <p>Description: ${product.description}</p>
          </div>
          </div>
          `;
        } else {
          console.error('Product not found.');
        }
      }
  
      // Call displayProductDetails function on page load
      window.onload = function() {
        displayProductDetails();
      };
    