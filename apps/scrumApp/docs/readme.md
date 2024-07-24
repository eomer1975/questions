Script to obtain data:

```
var asks = [];
var headings = document.getElementsByClassName("heading-element");
for(var i = 9; i < headings.length -1; i++) {
var ask = {};
//console.log(headings[i].innerText)
ask.text = headings[i].innerText;
ask.answers = [];
let inputs = headings[i].parentElement.nextElementSibling.getElementsByTagName("input");
for(var j = 0; j < inputs.length; j++) {
if(inputs[j].type == "checkbox") {
var answer = {};
//console.log(inputs[j].parentElement.innerText)
//console.log(inputs[j].checked)
answer.text= inputs[j].parentElement.innerText;
answer.isTrue= inputs[j].checked;
ask.answers.push(answer);
}
}
asks.push(ask)
}
console.log(asks);
console.log(JSON.stringify(asks));
```
