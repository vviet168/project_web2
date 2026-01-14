document.addEventListener('DOMContentLoaded', function () {
  const priceInputs = document.querySelectorAll('.product__price-input');

  priceInputs.forEach(input => {
    input.addEventListener('input', function () {
      let value = this.value.replace(/\D/g, '');
      this.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    });
  });
});


const ramButtons = document.querySelectorAll('.ram-btn');
   const priceEl = document.getElementById('product-price');
   ramButtons.forEach(button => {
       button.addEventListener('click', () => {
           // bỏ active tất cả
           ramButtons.forEach(btn => btn.classList.remove('active'));
           // active nút được click
           button.classList.add('active');
           // lấy giá & format
           const price = Number(button.dataset.price);
           priceEl.textContent = price.toLocaleString('vi-VN') + ' đ';
       });
});


const minusBtn = document.querySelector('.product__quantity-btn--minus');
const plusBtn = document.querySelector('.product__quantity-btn--plus');
const quantityNumber = document.querySelector('.product__quantity-number')
let quantity = 1
plusBtn.addEventListener('click', () => {
    quantity++;
    quantityNumber.textContent = quantity;
    minusBtn.disabled = quantity === 1 ? true : false;
})
minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityNumber.textContent = quantity;
    }
    minusBtn.disabled = quantity === 1;
});