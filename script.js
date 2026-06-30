Object.prototype.getKeys = function() {
    return Object.keys(this);
};

const student = {
    name: "Bikas",
    age: 22,
    city: "Pune"
};

console.log(student.getKeys());