function card(user) {
	return `
    <div>
			<h3>${user.name}</h3>
			<ul>
				<li>${user.email} :</li>
				<li>${user.phone} :</li>
				<li>${user.address.street} , ${user.address.city} :</li>
			</ul>
		</div>
    `;
}
const userListEl = document.getElementById("card");

// fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
// 	res.json().then((result) => {
// 		console.log(result);
// 		userListEl.innerHTML = result.map((user) => card(user)).join(" ");
// 	});
// });
async function run() {
	try {
		let res = await fetch("https://jsonplaceholder.typicode.com/users");
		let result = await res.json();
		userListEl.innerHTML = result
			.map((user) => {
				return card(user);
			})
			.join("");
	} catch (err) {
		console.log(err);
	}
}

run();
