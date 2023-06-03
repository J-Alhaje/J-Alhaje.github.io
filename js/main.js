const img = document.querySelector("#img");
const input = document.querySelector("#input");

input.onchange = () => {
  if (input.files[0]) img.src = URL.createObjectURL(input.files[0]);
};
