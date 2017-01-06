// your code, here
automatDishes = [
  'Chicken Pot Pie',
  'Baked Beans',
  'Macaroni and Cheese',
  'Burgundy Sauce with Beef and Noodles',
  'Creamed Spinach',
  'Pumpkin Pie',
  'Strawberry Shortcake'];

let mainDiv = document.getElementById('main')

let automatItemPrint = () => {
  automatDishes.forEach((item) => {
    let foodItem = document.createElement('div');
    foodItem.className = 'food-item';
    foodItem.innerHTML += item;

    let mainDiv = document.getElementById('main');
    mainDiv.appendChild(foodItem);

    foodItem.addEventListener('click', () => {
    foodItem.className += ' hidden';
    });
  });
}

automatItemPrint();
