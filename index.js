const bikeTrek = {
  brand: "Trek",
  model: "Emonda",
  category: "Roadbike",
  frameSize: 56,
  weight: "7,6 Kilo",
  wheels: "Bontrager",
};

console.log(bikeTrek);

function contribute() {
  document.getElementById("demo").innerHTML = bikeTrek.weight;
}
