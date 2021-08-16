const Intern = require("../lib/Intern");

test("Can set school using constructor function", () => {
  const uni = "GitHubUser";
  const member = new Intern("Iroh", 1, "test@test.com", uni);
  expect(member.getSchool()).toBe(uni);
});

test("getRole() should return \"Intern\"", () => {
  const position = "Intern";
  const member = new Intern("Iroh", 1, "test@test.com", "GitHub");
  expect(member.getRole()).toBe(position);
});
