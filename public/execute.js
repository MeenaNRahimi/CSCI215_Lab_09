$("#submitButton").click(function(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var fullName = firstName + " " + lastName;
    $.post("/myPost",
        {
            firstname: firstName,
            lastname: lastName,
            fullname: fullName
        },
        function(){
            var node = document.createElement("p");
            var textnode = document.createTextNode(fullName);
            node.appendChild(textnode);
            document.getElementById("myDiv").appendChild(node);            });
});