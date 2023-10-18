# GitHub Logger Challenge

## User Story

> As a CLI user I should be able to log my GitHub activity in a `.json` file.

## Acceptance Criteria

- When the application starts I should be presented with a question:
  ```
  Please select an action:
    - Search by username
    - Search by organisation name
    - View favorites
    - Exit
  ```
- When the user selects the option of `Search by username` then the application must present a question:
  ```
  Please enter username:
  ```
- When the user selects the option of `Search by organisation` then the application must present a question:
  ```
  Please enter organisation name:
  ```
- When the user enters a valid username or organisation then the user must be presented with the content of the API response in the form of a table
- The user will then be presented with another question:
  ```
  Do you want to add this to your favorites? (Y/n)
  ```
- If the user selects `Yes` then the following information from the API response will be stored in a file which will contain a list of your favorites and the first set of questions are presented again
  ```json
  {
    "id": 123,
    "name": "name from response",
    "html_url": "html url from response",
    "description": "description from response",
    "type": "organisation or username"
  }
  ```
- If the user selects `No` then the first set of questions are presented again
- If the user selects `View favorites` then the list of favorites from the file is presented in a table
- If the user selects `Exit` then the application will exit

## URLS

[GitHub organisation](https://api.github.com/orgs/nodejs)

[GitHub username](https://api.github.com/users/mojombo)
