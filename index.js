const body = document.querySelector('body');
function addNewContact(newID){
  body.innerHTML = newID;
  document.body.append(message)
}
function submitData(name, email) {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
          name: name,
          email: email,
      }),
    };
      return fetch("http://localhost:3000/users", configurationObject)
      .then(res => res.json())
      .then(body => addNewContact(body.id))
      .catch(function (error) {
        alert("Unauthorized Access");
        body.append(error)
      })
  }
  submitData("steve", "steve@website.com")