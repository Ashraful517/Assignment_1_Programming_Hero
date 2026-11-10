Title:  Differences between type aliases and interface in TypeScript and their use-cases.

Introduction: Type  Alias and Interface , they are used in TypeScript to define the structure of an object or define the type. Yet, there are some core difference among them and based on their difference they have different usecase too. 


Description: At first, Type Alias and interface ,both are structurally different from each other. In below we are going to see the basic structure of this two important topic:

**Type Alias**                            
type Vehicle = {                           
    brand: string;
}

**Interface**
Interface User{
    name: string;
}

We can see the structural difference between them, this indicate that their core motive isn't also the same. Interface is more connected to object, while 'Type Alias' is more connected to literals, unions, tuples and primitive.

Typescript itself suggest to use interface. But developers ended up to using Type alias more. You can do somethings in Type Alias while some things in Interface. Ability of Creating Duplicate name is one of the main advance of the interface. It allow to create 2 objects in the same name and then it will merge them automatically into one. One can't create duplicate names' objects by using 'Type Alias'.

In the meantime, One can do Union by using Type Alias while it's not directly possible by using interface. Developer can still do union by using interface, this have to be inside an object. Interface can be extended like inheritance which is not possible in Type Alias. Here one has to do it by adding two type with a '&' operator.

So, when we have to use 'Union' we simply should use 'Type Alia',when we have to do merge or extend we can use Interface. Besides Interface is better in OOP while type is good for Data transformation and complex data type.

Conclusion: Both Type Alias and Interface are important topics in typescript which helps developers a lot. But to use these in right place we have to know their core algorithm and usecase.