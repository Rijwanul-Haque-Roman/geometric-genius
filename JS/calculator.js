function getValue(idOfInput) {
  return parseFloat(document.getElementById(idOfInput).value);
}

function setValue(containerId, output) {
  const container = document.getElementById(containerId);
  if (isNaN(output)) {
    container.innerHTML = `<p>Both input must be numbers</p>`;
  } else {
    container.innerHTML = `<p>Area: ${output} cm<sup>2</sup></p>`;
  }
}

function claculateTriangleArea() {
  const triangleBase = getValue("triangle-base");
  const triangleHeight = getValue("triangle-height");
  const areaOfTriangle = 0.5 * triangleBase * triangleHeight;
  setValue("triangle-area", areaOfTriangle);
}

function claculateRectangleArea() {
  const width = getValue("rectangle-width");
  const length = getValue("rectangle-length");

  const area = width * length;
  setValue("rectangle-area", area);
}
