var bio = {
				"name": "Aumio Aziz",
				"role": "Web Developer",
				"contacts": {
						    "mobile": "773-517-6355",
						    "email": "aumio.aziz@gmail.com",
						    "github": "aaaziz2",
						    "twitter": "@AumioAziz",
						    "location": "Chicago,IL"
							},
				"welcomeMsg": "Welcome to my Resume Page",
				"skills": ["HTML", "CSS", "JavaScript", "Java"],
				"biopic": "images/aumio.jpg",
			    "display": function() {
										var formattedName = HTMLheaderName.replace("%data%", bio.name);
										var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

									    $("#header").prepend(formattedRole);
									    $("#header").prepend(formattedName);

									    if(Object.keys(bio.contacts).length >= 5){
									    	for(var property in bio.contacts){
										        var value = bio.contacts[property];
										        var data = HTMLcontactGeneric.replace("%contact%",property)
									                                    	 .replace("%data%" , value);
									        	$("#topContacts").append(data);
									      	}
									    }

	    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic))
	                .append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMsg))
	                .append(HTMLskillsStart);

	    if(Object.keys(bio.skills).length >= 1){
	    	for (var key in bio.skills) {
	        	$("#skills").append(HTMLskills.replace("%data%", bio.skills[key]));
	      	}
	    }
	}
};

bio.display(); // display the bio section

