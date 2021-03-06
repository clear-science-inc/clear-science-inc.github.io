function updateMailList() {
  const Http = new XMLHttpRequest();
  const data = {
    email: document.getElementById('Email1').value,
    name: document.getElementById('Name1').value,
    source: `{"origin":"CSI Website"}`
  }
  var url = `https://id.clearscienceinc.com/account/AddListMember?email=${data.email}&name=${data.name}&vars=${data.source}`;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange=function() {
    var response = JSON.parse(Http.responseText);
    var currentEmail = data.email;
    if(response.message == "Mailing list member has been created")
    {
      $('#Success-tag').text("A verification email has been sent to your email address!");
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