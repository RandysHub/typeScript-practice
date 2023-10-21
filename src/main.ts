
console.log("helloWorld")
const res = await fetch("https://api.myanimelist.net/v2/users/{user_name}/animelist")

let data = await res.json();
console.log(data);

// let thing: HTMLDivElement = document.querySelector('.thing')
// thing.style.backgroundColor = 'blue';







export {}
