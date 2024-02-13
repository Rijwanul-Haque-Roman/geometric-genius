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

function claculateParallelogramArea() {
  const base = getValue("parallelogram-base");
  const height = getValue("parallelogram-height");
  const area = base * height;
  setValue("parallelogram-area", area);
}

function claculateRhombusArea() {
  const d1 = getValue("rhombus-d1");
  const d2 = getValue("rhombus-d2");
  const area = 0.5 * d1 * d2;
  setValue("rhombus-area", area);
}

function claculatePentagonArea() {
  const side = getValue("pentagon-side");
  const area = 1.72 * side ** 2;
  setValue("pentagon-area", area);
}

function claculateElllipseArea() {
  const major = getValue("ellipse-major");
  const minor = getValue("ellipse-minor");
  const area = 3.14156 * major * minor;
  setValue("ellipse-area", area);
}
