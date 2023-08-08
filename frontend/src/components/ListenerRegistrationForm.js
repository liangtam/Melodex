import { useState, useEffect } from "react";
import styles from "./ListenerRegistrationForm.module.css";

// Here is our registration form. Notice that it is basically just a giant function!
const ListenerRegistrationForm = () => {
  // This is using the useState hook. React will "react" to changes to these states!
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Here, we are defining the function to handle changes in our input text fields.
  //      Notice, for example, the username input field, we have onChange={handleUsernameChange}
  //      This makes it so that everytime we type something in the input field, the change will be handled
  //      by our function handleUsernameChange. In this case, it sets the username state above to what the input value is!
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Here, is a function we again define to make calls to the backend. Notice that our button below uses it!
  //      That's ofc bc we want this function to be ran when our register button is clicked.
  const handleRegisterClick = (e) => {
    e.preventDefault(); // here we just tell the button to not follow its default behaviour, whatever it may be

    // Here, we create a user object from the username and password we stored in our states above :)
    const user = {
      username: username,
      userPassword: password,
    };

    // Now, here comes the call to the backend! Take a look at how we call the function "fetch".
    //      "fetch" takes two parameters: one being the API route, and one object defining what we want
    //              - The API route is something I will provide after I finish the backend. You can put some placeholder for now
    //              - The object thing tells the fetch function what we want from that api route. For example, we want to
    //              add a user to the database. So we want to send a POST request to that api route. We want to send our user object
    //              as the request body, but turned into JSON first (that's what the JSON.stringify thing is).
    //              Then, the "headers" part is just telling the api route what kind of content we're sending, which is JSON!
    //      "fetch" returns something to us. Not sure what it is, but we'll store it in a variable called "response"

    const response = fetch("http://localhost:8080/api/user/add", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Now, if the response is OK, that's good! We can just print out that we succeeded, just to let us know :) else, print out a msg
    //      that lets us know smt went wrong :(
    if (response.ok) {
      console.log("New user added!");
    } else {
      console.log("Error! :(");
    }
  };

  // This is just the html part :) what displays on the webpage
  return (
    <div className={styles.form}>
      <label>
        Email:{" "}
        <input
          type="text"
          placeholder="Email"
          onChange={handleUsernameChange}
        ></input>
      </label>
      <label>
        Username:{" "}
        <input
          type="text"
          placeholder="Username"
          onChange={handleUsernameChange}
        ></input>
      </label>
      <label>
        Password:{" "}
        <input
          type="text"
          placeholder="Password"
          onChange={handlePasswordChange}
        ></input>
      </label>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  );
};

// Here, we are EXPORTING the ListenerRegistrationForm function so that we can actually use it in our website.
export default ListenerRegistrationForm;
