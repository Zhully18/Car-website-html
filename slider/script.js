function showCar(type) {
    let carImg = document.getElementById('car-img');
    let carName = document.getElementById('car-name');
    // let cakePrice = document.getElementById('car-price');
    let carDescription = document.getElementById('car-description');

    if (type === 'range') {
        carImg.src = 'car1.png';
        carName.textContent = 'Land Rover Range Suv';
        // cakePrice.textContent = '$15';
        carDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam hic unde culpa facere voluptates, maxime vel quod quasi possimus officia quidem eum adipisci';
    } else if (type === 'jeep') {
        carImg.src = 'car3.png';
        carName.textContent = 'White Jeep Cherokee Suv';
        // cakePrice.textContent = '$12';
        carDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam hic unde culpa facere voluptates, maxime vel quod quasi possimus officia quidem eum adipisci';
    } else if (type === 'tesla') {
        carImg.src = 'car4.png';
        carName.textContent = 'Gray Mercedez Benz Amg';
        // cakePrice.textContent = '$18';
        carDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laboriosam hic unde culpa facere voluptates, maxime vel quod quasi possimus officia quidem eum adipisci';
    }
}