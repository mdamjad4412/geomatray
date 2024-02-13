function rectangleCalculator(){
  // console.log('click the rectangle')
  const rectangleInput = document.getElementById('rectangle-base');
  const rectangle = rectangleInput.value;
  const base =parseFloat(rectangle);
  console.log (base)
  // rectangle width
  const rectangleWidth = document.getElementById('rectangle-width');
  const rectangleWidthArea = rectangleWidth.value;
  const width = parseFloat(rectangleWidthArea)
  console.log(width)
  // calculate rectangle area 
  const area = base * width
  console.log ('claculate rectagle area is :',area)
  // display calculate 
  const rectagleAreaSpan = document.getElementById('rectangle-area');
  rectagleAreaSpan.innerText = area
}