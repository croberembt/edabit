/*

Instructions: 

Create a method in the Person class which returns how another person's age compares. 
Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples:

p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)

p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me."

Code below: 

*/


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
    }

	compareAge(other) {
        if (other.age > this.age) {
            return `${other.name} is older than me.`
        } else if (other.age < this.age) {
            return `${other.name} is younger than me.`
        } else {
            return `${other.name} is the same age as me.`
        }
	}
}


other = new Person("Calli", 24); 
p1 = new Person("Samuel", 14);
p2 = new Person("Joel", 36);
p3 = new Person("Lily", 24); 

p1.compareAge(other); 
p2.compareAge(other);
p3.compareAge(other);
