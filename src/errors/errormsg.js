console.log("start of snippt");

export const resPassword2 = [
  400,
  {
    password: [
      "This password is too short. It must contain at least 8 characters.",
      "This password is too common.",
      "This password is entirely numeric."
    ]
  }
];

// the response could also look like this

export const resUsername = [
  400,
  {
    username: [
      "This username is already used.",
      "username to short",
      "hey i want that username"
    ]
  }
];

export const resPassword = {
  errorMsg: 400,
  password: [
    {
      error1: "error1",
      error2: "error2",
      error3: "error3"
    }
  ]
};

// res[1].username will give the array but there is no garuentee that username
// will be a thing so we need to dynamically generate the username bit
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
