const axios = require("axios");
const { fetchDataAndLog } = require("./fetchDataAndLog");

describe("fetchDataAndLog", () => {
  it("should call axios with the expected URL for username", async () => {
    const spy = jest.spyOn(axios, "get").mockResolvedValue({});

    await fetchDataAndLog("username", "foo");

    expect(spy).toHaveBeenCalledWith("https://api.github.com/users/foo");
  });

  it("should call axios with the expected URL for organisation", () => {});
});
