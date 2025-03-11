setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("loader").style.display = "none"; 
        document.getElementById("main").style.display = "block";
        setTimeout(() => {
            document.getElementById("main").style.opacity = "1"; 
        }, 100);
    }, 1000);
}, 1);

const header = document.getElementById("header");
let lastScrollY = window.scrollY;
let scrollTimeout;

window.addEventListener("scroll", function() {
    const currentScrollY = window.scrollY; 

    
    if (currentScrollY > 10) {
        header.classList.add("scrolled"); 
    } else {
        header.classList.remove("scrolled"); 
    }

   
    if (currentScrollY > lastScrollY && currentScrollY > 10) {

        header.classList.add("hidden");
    } else if (currentScrollY < lastScrollY || currentScrollY <= 10) {
       
        header.classList.remove("hidden");
    }

    lastScrollY = currentScrollY;

    if (scrollTimeout) {
        clearTimeout(scrollTimeout); 
    }

    scrollTimeout = setTimeout(function() {
        if (currentScrollY > 10) {
            header.classList.add("hidden"); 
        }
    }, 1000); 


    if (currentScrollY === 0) {
        header.classList.remove("hidden");
    }
});

emailjs.init("AKrEGQm8Flb5u1oWG"); 

document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    var submitButton = document.getElementById("submit-button"); 
    submitButton.innerText = "در حال ارسال...";


    submitButton.style.opacity = 0.7;
    submitButton.style.backgroundColor = "#f0ad4e"; 

    emailjs.send("service_t2a5b9n", "template_0w1iuxf", {
        from_first_name: document.getElementById("first-name").value,
        from_last_name: document.getElementById("last-name").value,
        from_email: document.getElementById("email").value,
        from_phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }).then(function(response) {
        
        submitButton.innerText = "ارسال با موفقیت انجام شد";
        submitButton.style.opacity = 1;
        submitButton.style.backgroundColor = "#4bff93"; 
        setTimeout(function() {
            submitButton.innerText = "ارسال"; 
            submitButton.style.backgroundColor = ""; 
        }, 2000); 

    }, function(error) {
        
        submitButton.innerText = "ارسال انجام نشد!";
        submitButton.style.opacity = 1;
        submitButton.style.backgroundColor = "#ff4b75"; 
        setTimeout(function() {
            submitButton.innerText = "ارسال"; 
            submitButton.style.backgroundColor = ""; 
        }, 2000); 
    });
});
