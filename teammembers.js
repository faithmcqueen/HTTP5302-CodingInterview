function fetchData(){
	fetch('http://sandbox.bittsdevelopment.com/code1/fetchemployees.php')
	.then(response => {
		console.log(response);
		return response.json();
	})//end .then(response)
	.then(data =>{
		console.log(data);
		const employees = Object.values(data);
		//console.log(employees);
		//Test: can we actually get individual results?
		//console.log(employees[0].employeefname);

		//Loop through the data
		for(let i = 0; i < employees.length; i++){
			//Test: is our loop working?
			//console.log(employees[i].employeefname);
			const name = employees[i].employeefname + " " + employees[i].employeelname;
			const bio = employees[i].employeebio;

			//Our DOM element we will append
			var element = document.getElementById("team");

			//create boxes
			var wrapper = document.createElement("div");
			wrapper.className = "wrapper";
			//add the div to our main container so we can print the information inside the box
			element.appendChild(wrapper);

			//determine if employee is featurd
			if (employees[i].employeeisfeatured === "1"){
				var feature = document.createElement("img");
				//pull icon clipart from icons8
				feature.src = "https://img.icons8.com/emoji/48/000000/crown-emoji.png"
				feature.className = "feature"
				wrapper.appendChild(feature);
			}

			//print images
			var img = document.createElement("img");
			img.className = "image"; 
			img.src = "http://sandbox.bittsdevelopment.com/code1/employeepics/" + employees[i].employeeid +".jpg"

			//print names
			var namepara = document.createElement("p");
			namepara.className = "name"; 
			var namenode = document.createTextNode(name);
			namepara.appendChild(namenode);

			//print bios
			var biopara = document.createElement("p");
			biopara.className = "bio";
			var bionode = document.createTextNode(bio);
			biopara.appendChild(bionode);

			//append DOM elements
			wrapper.appendChild(img);
			wrapper.appendChild(namepara);
			wrapper.appendChild(biopara); 

			//Handle roles:
			const roles = employees[i].roles;
			//loop through our roles array to get the role name
			for(let y = 0; y < roles.length; y++){
				//can we get role ids?
				console.log(roles[y].roleid);
				var role = document.createElement("span");
				role.style.backgroundColor = roles[y].rolecolor;
				role.className = "role";
				var rolenode = document.createTextNode(roles[y].rolename);
				role.appendChild(rolenode);
				wrapper.appendChild(role);
			}//end roles FOR loop
		}//end employees FOR loop
	})//end .then(data)
	.catch(error => {
		console.log(error);
	}); //end .catch
} //end fetchData()

//Call our fetchData() function
fetchData();