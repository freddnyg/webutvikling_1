var saga = document.querySelector('.saga');
var tyra = document.querySelector('.tyra');

saga.addEventListener('mouseover', function() {
    this.getAttributeNode("src").value = "images/saga_1.jpg"
});

saga.addEventListener('mouseout', function() {
    
    this.getAttributeNode("src").value = "images/saga_2.jpg"
});

tyra.addEventListener('mouseover', function() {
    this.getAttributeNode("src").value = "images/tyra_1.jpg"
});

tyra.addEventListener('mouseout', function() {
    this.getAttributeNode("src").value = "images/tyra_2.jpg"
});