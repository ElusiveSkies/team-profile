const Manager = require("../lib/Manager");

test("Can set office number using constructor function", () => {
  const num = "999-999-9999";
  const member = new Manager("Iroh", 1, "test@test.com", num);
  expect(member.getOffice()).toBe(num);
});

test("getRole() should return \"Manager\"", () => {
  const position = "Manager";
  const member = new Manager("Iroh", 1, "test@test.com", "GitHub");
  expect(member.getRole()).toBe(position);
});
