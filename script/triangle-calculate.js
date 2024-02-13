// base  calculate 

function triangleCalculateArea(){
  const triangleInput = document.getElementById ('triangle-base')
  const triangle = triangleInput.value;
  const base = parseFloat (triangle)
  console.log( base)
  // height calculate 
  const triangleHeightInput = document.getElementById('triangel-height')
  const triangleHeight = triangleHeightInput.value;
  const height = parseFloat (triangleHeight)
  console.log(height)
  // calculate triangle area 
  const area = 0.5 * base * height
  console.log('triangle calculate area is:',area)

  // display triangle area 
  const triangleAreaSpan = document.getElementById ('triangle-area');
  triangleAreaSpan.innerText = area;
}



