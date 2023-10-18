const firstQuestion = {
  type: "list",
  name: "action",
  message: "Please select an action",
  choices: [
    {
      name: "Search by username",
      value: "username",
    },
    {
      name: "Search by organisation name",
      value: "organisation",
    },
    {
      name: "View favorites",
      value: "view",
    },
    {
      name: "Exit",
      value: "exit",
    },
  ],
};

const secondQuestion = {
  type: "input",
  name: "username",
  message: "Please enter username:",
};

module.exports = { firstQuestion, secondQuestion };
