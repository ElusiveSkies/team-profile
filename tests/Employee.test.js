
const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can a new object be created for a new employee", () => {
        const member = new Employee();
        expect(typeof(member)).toBe("object");
    });

    it("Can a new name be created using constructor function", () => {
        const name = "Iroh";
        const member = new Employee(name);
        expect(member.name).toBe(name);
    });

    it("Can a new id be set using constructor function", () => {
        const num = 7;
        const member = new Employee("Iroh", num);
        expect(member.id).toBe(num);
    });

    it("Can set email using constructor function", () => {
        const num = "test@test.com";
        const member = new Employee("Iroh", 1, num);
        expect(member.email).toBe(num);
    });

    describe("getName", () => {
        it("Can get name by getName()", () => {
            const num = "Iroh";
            const member = new Employee(num);
            expect(member.getName()).toBe(num);
        });
    });

    describe("getId", () => {
        it("Can get id by getId()", () => {
            const num = 7;
            const member = new Employee("Iroh", num);
            expect(member.getId()).toBe(num);
        });
    });

    describe("getEmail", () => {
        it("Can get email by getEmail()", () => {
            const num = "test@test.com";
            const member = new Employee("Iroh", 7, num);
            expect(member.getEmail()).toBe(num);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const num = "Employee";
            const member = new Employee("Iroh", 7, "test@test.com");
            expect(member.getRole()).toBe(num);
        });
    });

});
