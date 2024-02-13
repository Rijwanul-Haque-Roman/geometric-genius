function claculateTriangleArea(event) {
  const triangleBase = parseFloat(
    document.getElementById("triangle-base").value
  );
  const triangleHeight = parseFloat(
    document.getElementById("triangle-height").value
  );
  let areaOfTriangle = 0;
  const triangleResult = document.getElementById("triangle-result");
  if (isNaN(triangleBase) || isNaN(triangleHeight)) {
    triangleResult.innerText = `Both input must be numbers`;
  } else {
    areaOfTriangle = 0.5 * triangleBase * triangleHeight;
    triangleResult.innerHTML = `The area of the Triangle is ${areaOfTriangle} cm<sup>2</sup>`;
  }
}
