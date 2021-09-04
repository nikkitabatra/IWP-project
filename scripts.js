function loginvalidate()
{
    if(document.login.username.value=="")
    {
        alert("Please enter your username!");
        document.login.username.focus();
        return false;
    }
    if(document.login.password.value == "" || document.login.password.value.length != 8)
    {
        alert("Please enter a password of minimum 8 characters length (it is a suggestion to include uppercase letters/numbers/symbols etc.)");
        document.login.password.focus();
        return false;
    }
    
    alert("Login successful!!");
    return (true);
}
function registervalidate()
{
    if(document.register.username.value=="")
    {
        alert("Please enter your username!");
        document.register.username.focus();
        return false;
    }
    if(! /^[a-z0-9._-]+@gmail.com$/.test(register.email.value))
    {
        alert("Please enter your e-mail address ( in @gmail.com format only)");
        document.register.email.focus();
        return false;
    }
    if(document.register.password.value == "" || document.register.password.value.length != 8)
    {
        alert("Please enter a password of minimum 8 characters length (it is a suggestion to include uppercase letters/numbers/symbols etc.)");
        document.register.password.focus();
        return false;
    }
    if(document.register.passwordConf.value =="")
    {
        alert("Please confirm your password here");
        document.register.passwordConf.focus();
        return false;
    }
    else if (password != passwordConf) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }
    alert("You have been registered successfully!!");
    return (true);

}

$(document).ready(function() {
    $(".menu-toggle").on("click", function() {
      $(".nav").toggleClass("showing");
      $(".nav ul").toggleClass("showing");
    });
  
    $(".post-wrapper").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $(".next"),
      prevArrow: $(".prev"),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });
  
  ClassicEditor.create(document.querySelector("#body"), {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "blockQuote"
    ],
    heading: {
      options: [
        { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1"
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2"
        }
      ]
    }
  }).catch(error => {
    console.log(error);
  });