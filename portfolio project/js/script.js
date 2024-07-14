//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}


//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height) {
			//active navbar link
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*='+id+']').classList.add('active');
			});
			//active sections for animation scroll
			sec.classList.add('show-animate');
		}
		//if want to use animation that repeats scroll 
		else{
			sec.classList.remove('show-animate');
		}
	});
	//sticky header
	let header=document.querySelector('header');
	
	header.classList.toggle('sticky',window.scrollY>100);
	
	//remove toggle icon and navbar when click navbar link(scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
}

function emailSend(){

	var userName = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var subject = document.getElementById('subject').value;
	var message = document.getElementById('message').value;

	var messageBody = "Name " + userName +
	"<br/> Email " + email +
	"<br/> Phone " + phone +
	"<br/> Subject " + subject +
	"<br/> Message " + message;
	
	
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ranand282002@gmail.com",
    Password : "404150D7299CAC3901657C3ABEC2BC9CF769",
    To : 'ranand282002@gmail.com',
    From : "ranand282002@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Succussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}



/*const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const Subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}\nEmail: ${email.value}\nPhone Number: ${phone.value}\nSubject: ${subject:value\nMessage: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ranand282002@gmail.com",
        Password: "404150D7299CAC3901657C3ABEC2BC9CF769",
        To: 'ranand282002@gmail.com',
        From: "ranand282002@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if(message=='OK'){
				swal("Succussful", "You clicked the button!", "success");
			}
			else{
				swal("Error", "You clicked the button!", "error");
			}
		}
	);
}

*/



const resumePath = 'anand.pdf';
        document.getElementById('resumeBtn').addEventListener('click', function () {
            const downloadLink = document.createElement('a');
            downloadLink.href = resumePath;
            downloadLink.download = 'anand.pdf';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
		});