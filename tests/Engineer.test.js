const Engineer = require("../lib/Engineer");

test("Can set GitHub account using constructor function", () => {
  const account = "GitHubUser";
  const member = new Engineer("Iroh", 1, "test@test.com", account);
  expect(member.getGithub()).toBe(account);
});

test("getRole() should return \"Engineer\"", () => {
  const position = "Engineer";
  const member = new Engineer("Iroh", 1, "test@test.com", "GitHubUser");
  expect(member.getRole()).toBe(position);
});
