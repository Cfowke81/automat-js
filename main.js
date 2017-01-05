// your code, here
automatDishes = [
  'Chicken Pot Pie',
  'Baked Beans',
  'Macaroni and Cheese',
  'Burgundy Sauce with Beef and Noodles',
  'Creamed Spinach',
  'Pumpkin Pie',
  'Strawberry Shortcake'];

let automatItemPrint = () => {
  automatDishes.forEach((item) => {
    console.log(item);
    console.log("hello");
  });
}

let mainDiv = document.getElementById('main')
mainDiv.innerHTML = automatItemPrint
