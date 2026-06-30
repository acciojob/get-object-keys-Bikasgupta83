const student = {
	name: "Bikas",
	age:22,
	city:"Pune"
};

function getKeys(obj) {
    let arr = [];
    let key = Object.keys(obj);
    for(let i=0;i<key.length;i++){
        arr.push(key[i]);
    }
    console.log(arr);
}

getKeys(student);