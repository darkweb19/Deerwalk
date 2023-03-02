const user = [];
function User(name, age) {
	return {
		name,
		age,
		intro: function () {
			console.log("My name is " + this.name + " Age=" + this.age);
		},
	};
}

function formatUser(index, user) {
	return `<li>
				${index + 1}. ${user.name}
				<ul>
					<li>Age: ${user.age}</li>
					<li><button onclick = "${user.intro}">Say hi</button></li>
				</ul>
			</li>
			<br />`;
}

function createUser() {
	const nameEl = document.getElementById("name");
	const ageEl = document.getElementById("age");
	const userDet = User(nameEl.value, ageEl.value);
	if (nameEl.value == "" || ageEl.value == "") {
		return;
	}
	user.push(userDet);

	nameEl.value = "";
	ageEl.value = "";
	document.getElementById("user-list").innerHTML = user.map(
		(userDet, index) => formatUser(index, userDet)
	);
}
