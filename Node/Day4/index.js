// //!Events
const EventEmitter = require("events"); //this is class

// const myEvent = new EventEmitter(); //object of the class
// const myEvent2 = new EventEmitter();

// myEvent.on("event1", () => {
// 	console.log("event1 from call back");
// });

// myEvent.on("event1", (name) => {
// 	console.log(`Welcome ${name}`);
// });

// //passing object as parameter
// myEvent2.on("event2", (user) => {
// 	console.log(`HI i am ${user.name} and my age is ${user.age}`);
// });
// //code
// myEvent.emit("event1", "Sujan");
// myEvent2.emit("event2", { name: "Sujan", age: 21 });

//!sub heading
const myEvent = new EventEmitter();

myEvent.on("join", (userId) => {
	console.log("User joined");
	myEvent.on("user-added", () => {
		console.log("User added with id : " + userId);
	});
	myEvent.on("user-removed", () => {
		console.log("user removed with id :" + userId);
	});
});

myEvent.emit("join", 1);

myEvent.emit("user-removed");
myEvent.emit("user-added");

//!task
