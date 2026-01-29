
 
  document.addEventListener('DOMContentLoaded', function() {
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
   
    document.querySelectorAll('.wishlist').forEach(button => {
      button.addEventListener('click', function() {
        const productCard = this.closest('[class*="featured-"]');
        const product = {
          name: productCard.querySelector('.name b').textContent.replace(/\n/g, ' ').trim(),
          price: productCard.querySelector('.price b').textContent,
          image: productCard.querySelector('img').src,
          category: productCard.closest('.featured-products-container, .featured-TV-container, .featured-laptops-container, .featured-camera-container, .featured-earbuds-container').previousElementSibling.textContent.trim()
        };
        
       
        const existingIndex = wishlist.findIndex(item => 
          item.name === product.name && item.price === product.price
        );
        
        if (existingIndex === -1) {
          wishlist.push(product);
          this.innerHTML = 'Wishlisted &nbsp <i class="fas fa-heart"></i>';
          this.style.backgroundColor = '#007bff';
          this.style.color='white';
        
        } else {
          wishlist.splice(existingIndex, 1);
          this.innerHTML = 'Wishlist &nbsp <i class="far fa-heart"></i>';
          this.style.backgroundColor = 'white';
          this.style.color='black';

         
        }
        
      
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      });
      
     
      const productCard = button.closest('[class*="featured-"]');
      const productName = productCard.querySelector('.name b').textContent.replace(/\n/g, ' ').trim();
      const productPrice = productCard.querySelector('.price b').textContent;
      
      const existingWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const isInWishlist = existingWishlist.some(item => 
        item.name === productName && item.price === productPrice
      );
      
      if (isInWishlist) {
        button.innerHTML = 'Wishlisted &nbsp <i class="fas fa-heart"></i>';
        button.style.backgroundColor = '#007bff';
        button.style.color= 'white';
      }
    })
    
   
 
    
  });

