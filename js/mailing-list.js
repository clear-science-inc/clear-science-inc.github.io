function updateMailList() {
    const Http = new XMLHttpRequest();
    const data = {
      email: document.getElementById('Email1').value,
      name: document.getElementById('Name1').value,
      description: "visitor"
    }

    var url = `https://localhost:5001/account/AddListMember?email=${data.email}&name=${data.name}&description=${data.description}`;
    Http.open("GET", url);
    Http.send();
    Http.onreadystatechange=function() {
      var response = JSON.parse(Http.responseText);    
      var currentEmail = data.email;
      if(response.message == "Mailing list member has been created")
      {
        $('#Success-tag').text("Successfully Subscribed!");
        setTimeout(function() {
          $('#Success-tag').text("");
        }, 5000);
        document.getElementById('Email1').value = "";
        document.getElementById('Name1').value = "";
      }
      else if(response.message == "The 'address' parameter should be a valid email address")
      {
        $('#Success-tag').text("Invalid Email!");
        document.getElementById('Email1').value = "";
        document.getElementById('Name1').value = "";
      }
      else if(response.message == "Address already exists '" + currentEmail.toLowerCase() + "'")
      {
        $('#Success-tag').text("Already Subscribed!");
        document.getElementById('Email1').value = "";
        document.getElementById('Name1').value = "";
      }
    }
  }
 