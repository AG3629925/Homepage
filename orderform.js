$(document).ready(function () {
  $('#name').focus();
  
  function validateField(id, pattern, errorMsg) {
    const value = $(id).val();
    if (!pattern.test(value)) {
      $(id + 'Error').text(errorMsg);
      return false;
    } else {
      $(id + 'Error').text('');
      return true;
    }
  }
  
  function validateForm() {
      const nameValid = validateField('#name', /\S+/, 'Name is required');
      const emailValid = validateField('#email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Valid email is required'); 
      const addressValid = validateField('#address', /\S+/, 'Address is required'); 
      const cityValid = validateField('#city', /\S+/, 'City is required');
      const zipValid = validateField('#zipcode', /^\d{5}$/, 'Zip code must be 5 numeric characters');
      
      return nameValid && emailValid && addressValid && cityValid && zipValid;
  }
  
  $('input').blur(function () {
    validateForm();
  });
  
  $('#copyAddress').change(function () {
    if(this.checked) {
      $('#shipAddress').val($('#address').val());
      $('#shipCity').val($('#city').val());
      $('#shipZipcode').val($('#zipcode').val());
    }
  });
  
  function calculateOrder() {
    let orderTotal = 0;
    $('.qty').each(function (index) {
      let quantity = parseFloat($(this).val()) || 0;
      let price = parseFloat($('#price' + index).text().replace('$', ''));
      let total = price * quantity; 
      $('#total' + index).text(total.toFixed(2));   
      orderTotal += total; 
    
    }); 
    
    $('#subtotal').text(orderTotal.toFixed(2)); 
    let tax = ($('#state').val() === 'TX') ? orderTotal * 0.08 : 0; 
    $('#tax').text(tax.toFixed(2)); 
    
    let shipping; 
    switch ($('#state').val()) {
      case 'TX': 
        shipping = 5; 
        break;
      case 'CA': 
      case 'NY': 
        shipping = 20; 
        break; 
      default: 
        shipping = 10; 
        break; 
    }
    $('#shipping').text(shipping.toFixed(2)); 
    let grandTotal = orderTotal + tax + shipping; 
    $('#grandTotal').text(grandTotal.toFixed(2));
  }
  
  $('.qty').blur(function () {
    calculateOrder(); 
  }); 
  
  $('#orderForm').submit(function (event) { 
    if (!validateForm()) {
      event.preventDefault();
    }
  });
});  
