Title: Explanation of the Access modifiers and how they works in TypeScript OOP.


Introduction: In object oriented Programming (OOP) gives developer a way to control the audience of their code through these access modifier which are public, private , protected and readonly. By using these access modifier, developer/coder can control who can see or change class properties of their code.

Description: In below I am going to explain how these access modifiers work,
1.Public : This is welcoming front door which is actually the default state of a class or function. This modifier makes everything inside a class accessible for anyone from anywhere like inside or outside the class and more. If one doesn't mention a modifier exclusibly for a class or properties, compipler guess it is in Public state.

class Employee{
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

}
Here every property is in public state as it's default state.


2.Private: This modifier is a strict vault. It completely lock properties so they can only be read or modify inside the specific class that defined them. In this case we have getters and setters method which actually allow the external code to safely read and update a private property. But it also prevent any unauthorised changes.

class Employee {
    name: string;
    private _baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this._baseSalary = baseSalary;
    }

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(amount: number) {
        if (amount >= 0) {
            this._baseSalary = amount;
        }
    }
}
Here _baseSalary is in private state. We accessed it through get and set method in a controlled way.

3.Protected : Protected mode is more accessible than private but more restrictive than Public. It's a middle state,This means that it allows trusted access through child classes derived from its own class. but not from outside world randomly. 

4.readonly: This modifier seals the property on immutability, which ensure that the property can only be set during initialization and never altered again.


class Employee {
    public readonly id: string;
    public name: string;
    protected _baseSalary: number;

    constructor(id: string, name: string, baseSalary: number) {
        this.id = id;
        this.name = name;
        this._baseSalary = baseSalary;
    }
}

class Manager extends Employee {
    public increaseSalary(amount: number): void {
        this._baseSalary += amount;
    }
}
Here we can see the example and work procedure for both protected and readonly access modifier.


Conclusion: These four modifiers helps to build secure, robust software by saying exactly where data can be seen, modified or inherited. They give total control over the codebase and ensure security.