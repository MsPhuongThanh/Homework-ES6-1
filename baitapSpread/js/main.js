const str = dom(".heading").innerHTML;
const chars = [...str];
let html = "";

for (let i = 0; i < chars.length; i++) {
  html += `
        <span>${chars[i]}</span>
    `;
}
dom(".heading").innerHTML = html;
console.log('Spread Operator', html);

function dom(id){
    return document.querySelector(id)
}
