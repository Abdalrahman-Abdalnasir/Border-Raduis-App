let outputCode = document.querySelector("#css-code");
let sliders = document.querySelectorAll("input[type = 'range']");

sliders.forEach(function (slider) {
  slider.addEventListener("input", createBlob);
});

let inputsNum = document.querySelectorAll("input[type = 'number']");

inputsNum.forEach(function (inp) {
  inp.addEventListener("change", createBlob);
});

function createBlob() {
  // Sliders Border-Radius Values
  let radOne = sliders[0].value;
  let radTwo = sliders[1].value;
  let radThree = sliders[2].value;
  let radFour = sliders[3].value;
  // Width & Height Inputs Values
  let blobWidth = inputsNum[0].value;
  let blobHeight = inputsNum[1].value;
  // Final Border-Radius Value
  let borderRadius = `${radOne}% ${100 - radOne}% ${
    100 - radThree
  }% ${radThree}% / ${radFour}% ${radTwo}% ${100 - radTwo}% ${100 - radFour}%`;
  document.querySelector(
    ".blob"
  ).style = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px;`;
  // Generate Blob Code
  outputCode.value = `border-radius: ${borderRadius}`;
}

// Copy Border-Radius

document.querySelector(".copy").addEventListener("click", function() {
  outputCode.select();
  document.execCommand("copy")
  // Change copyBtn Text
  document.querySelector(".copy").innerText = "Copied!";
  // Return copyBtn Text
  setTimeout(() => (document.querySelector(".copy").innerText = "Copy"), 1000);
})

createBlob();
