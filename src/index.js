const inquirer = require("inquirer");
const { firstQuestion, secondQuestion } = require("./questions");

const init = async () => {
  // prompt question 1 and get action
  const { action } = await inquirer.prompt(firstQuestion);

  //  if choice 1 is selected prompt username question
  if (action === "username") {
    const { username } = await inquirer.prompt(secondQuestion);

    // call fetchDataAndLog("username", username)
  }
};

module.exports = { init };
