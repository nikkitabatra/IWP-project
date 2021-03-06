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
        alert("Please enter your password!");
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
        alert("Please enter a username of your choosing!");
        document.register.username.focus();
        return false;
    }
    if(! /^[a-z0-9._-]+@gmail.com$/.test(register.email.value))
    {
        alert("Please enter an e-mail address ( in @gmail.com format only)");
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
        alert ("\nPasswords did not match: Please try again...")
        return false;
    }
    alert("You have been registered successfully!!");
    return (true);

}
function postsvalidation()
{
    if(document.createposts.title.value=="")
    {
        alert("Please enter a title for your blog!");
        document.createposts.title.focus();
        return false;
    }
    if(document.createposts.body.value=="")
    {
        alert("Please enter the body for your blog!");
        document.createposts.body.focus();
        return false;
    }
    if(document.createposts.image.value=="")
    {
        alert("Please upload an image for your blog!");
        document.createposts.image.focus();
        return false;
    }

    alert("You have created a post successfully !!");
    return (true);

}
function topicsvalidation()
{
    if(document.createtopics.name.value=="")
    {
        alert("Please enter a name for the topic!");
        document.createtopics.name.focus();
        return false;
    }
    if(document.createtopics.description.value=="")
    {
        alert("Please enter the description for your blog!");
        document.createtopics.description.focus();
        return false;
    }

    alert("You have created a post successfully !!");
    return (true);

}
function usersvalidation()
{
    if(document.createusers.username.value=="")
    {
        alert("Please enter a username of your choosing!");
        document.createusers.username.focus();
        return false;
    }
    if(! /^[a-z0-9._-]+@gmail.com$/.test(createusers.email.value))
    {
        alert("Please enter an e-mail address ( in @gmail.com format only)");
        document.createusers.email.focus();
        return false;
    }
    if(document.createusers.password.value == "" || document.createusers.password.value.length != 8)
    {
        alert("Please enter a password of minimum 8 characters length (it is a suggestion to include uppercase letters/numbers/symbols etc.)");
        document.createusers.password.focus();
        return false;
    }
    if(document.createusers.passwordConf.value =="")
    {
        alert("Please confirm your password here");
        document.createusers.passwordConf.focus();
        return false;
    }
    else if (password != passwordConf) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }
    alert("You have been createed successfully!!");
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