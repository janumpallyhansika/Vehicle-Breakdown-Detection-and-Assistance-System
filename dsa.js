

let mechanics = [
"Ravi Mechanics",
"Balaji Auto Works",
"SR Bike Point",
"City Car Care"
];

console.log("Mechanics List:", mechanics);

let stack=[];

stack.push("Engine Issue");
stack.push("Battery Issue");

console.log("Stack:",stack);

stack.pop();

console.log("Stack after pop:",stack);


let queue=[];

queue.push("User1");
queue.push("User2");

console.log("Queue:",queue);

queue.shift();

console.log("Queue after dequeue:",queue);


function linearSearch(arr,key){

for(let i=0;i<arr.length;i++){

if(arr[i]===key){
return i;
}

}

return -1;

}

console.log("Search Ravi Mechanics:",linearSearch(mechanics,"Ravi Mechanics"));


function bubbleSort(arr){

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length-i-1;j++){

if(arr[j]>arr[j+1]){

let temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;

}

}

}

return arr;

}

console.log("Sorted Mechanics:",bubbleSort(mechanics));