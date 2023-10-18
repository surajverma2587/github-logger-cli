const inquirer = require("inquirer");
const { init } = require(".");
const { firstQuestion, secondQuestion } = require("./questions");

describe("init", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should prompt first question with expected choices", async () => {
    const spy = jest
      .spyOn(inquirer, "prompt")
      .mockResolvedValue({ action: "foo" });

    await init();

    expect(spy).toHaveBeenCalledWith(firstQuestion);
  });

  it("should prompt username question when username choice is selected", async () => {
    const spy = jest
      .spyOn(inquirer, "prompt")
      .mockResolvedValue({ action: "username" });

    await init();

    expect(spy).toHaveBeenCalledWith(firstQuestion);
    expect(spy).toHaveBeenCalledWith(secondQuestion);
  });
});
