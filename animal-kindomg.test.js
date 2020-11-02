const { createAnimal } = require('./animal-kingdom');
const animal = require('./animal-kingdom');

describe('Test Dog', () => {
    test('should create a dog and return its name', () => {
        const marley = animal.Dog('Marley', 5);
        expect(marley.getName()).toBe('Marley');
    });

    test('should create a dog and return its age', () => {
        const marley = animal.Dog('Marley', 5);
        expect(marley.getAge()).toBe(5);
    });

    test('should create a dog and return its type', () => {
        const oscar = animal.Dog('Oscar', 5);
        expect(oscar.getType()).toBe('DOG');
    });

    test('should create a dog and say woof', () => {
        const milo = animal.Dog('Milo', 15);
        expect(milo.saySomething()).toBe('woof');
    });

    test('should create a dog named Oscar that is 10 years old and return its description', () => {
        const oscar = animal.Dog('Oscar', 10);
        expect(oscar.toString()).toBe('Name: Oscar\nAge: 10\nType: DOG');
    });
});

describe('Test Cat', () => {
    test('should create a cat and return its name', () => {
        const mewTwo = animal.Cat('MewTwo', 2);
        expect(mewTwo.getName()).toBe('MewTwo');
    });

    test('should create a cat and return its age', () => {
        const mewTwo = animal.Cat('MewTwo', 7);
        expect(mewTwo.getAge()).toBe(7);
    });

    test('should create a cat and return its type', () => {
        const oscar = animal.Cat('Oscar', 5);
        expect(oscar.getType()).toBe('CAT');
    });

    test('should create a cat and say meow', () => {
        const lucy = animal.Cat('Lucy', 15);
        expect(lucy.saySomething()).toBe('meow');
    });

    test('should create a cat named Lucy that is 10 years old and return its description', () => {
        const lucy = animal.Cat('Lucy', 10);
        expect(lucy.toString()).toBe('Name: Lucy\nAge: 10\nType: CAT');
    });
});

describe('Test createAnimal', () => {
    test('should create a cat and return its name', () => {
        const mewTwo = animal.createAnimal('MewTwo', animal.ANIMAL_TYPE.CAT, 2);
        expect(mewTwo.getName()).toBe('MewTwo');
    });

    test('should create a cat and return its age', () => {
        const mewTwo = animal.createAnimal('MewTwo', animal.ANIMAL_TYPE.CAT, 7);
        expect(mewTwo.getAge()).toBe(7);
    });

    test('should create a cat and return its type', () => {
        const oscar = animal.createAnimal('Oscar', animal.ANIMAL_TYPE.CAT, 5);
        expect(oscar.getType()).toBe('CAT');
    });

    test('should create a cat and say meow', () => {
        const lucy = animal.createAnimal('Lucy', animal.ANIMAL_TYPE.CAT, 15);
        expect(lucy.saySomething()).toBe('meow');
    });

    test('should create a cat named Lucy that is 10 years old and return its description', () => {
        const lucy = animal.createAnimal('Lucy', animal.ANIMAL_TYPE.CAT, 10);
        expect(lucy.toString()).toBe('Name: Lucy\nAge: 10\nType: CAT');
    });

    test('should create a dog and return its name', () => {
        const marley = animal.createAnimal('Marley', animal.ANIMAL_TYPE.DOG, 5);
        expect(marley.getName()).toBe('Marley');
    });

    test('should create a dog and return its age', () => {
        const marley = animal.createAnimal('Marley', animal.ANIMAL_TYPE.DOG, 5);
        expect(marley.getAge()).toBe(5);
    });

    test('should create a dog and return its type', () => {
        const oscar = animal.createAnimal('Oscar', animal.ANIMAL_TYPE.DOG, 5);
        expect(oscar.getType()).toBe('DOG');
    });

    test('should create a dog and say woof', () => {
        const milo = animal.createAnimal('Milo', animal.ANIMAL_TYPE.DOG, 15);
        expect(milo.saySomething()).toBe('woof');
    });

    test('should create a dog named Oscar that is 10 years old and return its description', () => {
        const oscar = animal.createAnimal('Oscar', animal.ANIMAL_TYPE.DOG, 10);
        expect(oscar.toString()).toBe('Name: Oscar\nAge: 10\nType: DOG');
    });
});