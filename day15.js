//문제 1. 객체 리터럴을 사용하여 이름이 "홍길동", 나이가 25인 person 객체를 만들어보세요.
const person = {
    name: "홍길동",
    age: 25,
};

//문제 2. 아래 car 객체의 brand 속성에 접근하여 콘솔에 출력해보세요.
const car = { brand: "Toyota", model: "Corolla"};
console.log(`carbrand: ${car.brand}`);
console.log(`carmodel: ${car.model}`);

//문제 3. person 객체가 sayHello 메소드를 가지고 있습니다. 이를 호출하여 콘솔에 "Hello, I am Alice."를 출력하세요.
const person1 = {
    name: "Alice",
    sayHello: function() {
        console.log("Hello, I am" + this.name + ".");
    }
};

person1.sayHello();

//문제 4. person 객체에 greet 메소드를 추가하여 "Hi, I'm [name]"을 출력하도록 만들어보세요.
const person2 = {
    name: "Bob",
    greet: function () {
        console.log(`Hi, I'm ${this.name}`);
    }
};

person2.greet();

//문제 5.`Person`이라는 생성자 함수를 사용하여 이름과 나이를 속성으로 가진 객체를 만들고, 해당 객체로 이름이 "John", 나이가 30인 객체를 생성하세요.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const newPerson1 = new Person("John", 30);

console.log(newPerson1.name);


//문제 6. 이름과 나이를 속성으로 가진 객체 배열에서 나이가 18 이상인 사람만 필터링하세요.
const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 20 },
    { name: "Paul", age: 15 },
    { name: "Mark", age: 25 }
];

const filtered = people.filter ((_person) => {
    return _person.age >= 18;
});

console.log(filtered);

//문제 7. "Apple", "Banana", "Orange"를 요소로 가진 배열을 만들어보세요.
const fruits = ["Apple", "Banana", "Orange"];

//문제 8. 위 배열의 두 번째 요소를 출력해보세요.
console.log(fruits[1]);

//문제 9. numbers 배열에 숫자 5를 추가해보세요.(push)
const numbers = [1, 2, 3, 4];

numbers.push(5);
console.log(numbers);

//문제 10. colors 배열에서 마지막 요소를 제거하세요.(pop)
const colors = ["Red", "Green", "Blue"];

colors.pop();
console.log(colors);

//문제 11. days 배열의 첫 번째 요소를 제거하세요.(shift)
const days = ["Monday", "Tuesday", "Wednesday"];

days.shift();
console.log(days);

//문제 12. names 배열의 맨 앞에 "Alice"를 추가하세요.(unshift)
const names = ["Bob", "Charlie"];

names.unshift("Alice");
console.log(names);

//문제 13. numbers 배열의 각 요소를 forEach를 사용하여 출력하세요.(forEach)
const numbers2 = [1, 2, 3];
numbers2.forEach(function(num) {
    console.log(num);
});

//문제 14. numbers 배열의 각 요소를 2배로 변환한 새로운 배열을 만드세요.(map) 
const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(function(num) {
    return num * 2;
});

console.log(doubled);

//문제 15. ages 배열에서 18세 이상인 숫자만 필터링하세요.(filter)
const ages = [12, 18, 20, 14, 25];
const ages1 = ages.filter(function(age) {
    return age >= 18;
});

console.log(ages1);

//문제 16. prices 배열의 합계를 구하세요.(reduce)
const prices = [10, 20, 30, 40];
const sum = prices.reduce(function(total, num) {
    return total + num;
}, 0);

console.log(sum);

//문제 17. 아래 배열에 "Banana"가 포함되어 있는지 확인하세요.(includes)
const fruits1 = ["Apple", "Orange", "Grapes"];
const isContains_Banana = fruits1.includes("Banana");

console.log("isContains_Banana: " + isContains_Banana);

//문제 18. numbers 배열을 오름차순으로 정렬하세요.(sort)
const numbers3 = [5, 2, 8, 1, 3];
numbers3.sort(function (a,b) {
    return a - b;
});

console.log(numbers3);

//문제 19. `letters` 배열을 뒤집어보세요.(reverse)
const letters = ["a", "b", "c", "d"];
letters.reverse();

console.log(letters);

//문제 20. `animals` 배열에서 첫 번째와 두 번째 요소를 잘라내어 새로운 배열을 만드세요.(slice)
const animals = ["Cat", "Dog", "Elephant", "Lion"];
const sliced = animals.slice(2, 4);

console.log(sliced);

//문제 21. `fruits` 배열의 두 번째 위치에 "Strawberry"를 추가하세요.(splice)
const fruits3 = ["Apple", "Banana", "Orange"];
fruits3.splice(1, 0, "Strawberry");

console.log(fruits3);

//문제 22. `arr1`과 `arr2` 배열을 합쳐 새로운 배열을 만드세요.(concat)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined);

//문제 23. `products` 배열에서 가격이 100 이상인 첫 번째 상품을 찾으세요.(find)
const products = [
    { name: "Shirt", price: 50 },
    { name: "Shoes", price: 120 },
    { name: "Hat", price: 80 },
];

const found = products.find(function(products) {
    return products.price >= 100;
});

const sorted = products.sort(function (a, b) {
    return a.price - b.price;
});

console.log(found);
console.log(sorted);

//문제 24. `numbers` 배열의 모든 요소가 짝수인지 확인하세요.(every)
const numbers5 = [2, 4, 6, 8];
const isAllEven = numbers5.every(function (number) {
    return 
})

console.log("isAllEven: " + isAllEven);

//문제 25. `ages` 배열의 요소 중 하나라도 21세 이상인지 확인하세요.(some)
const ages2 = [16, 20, 18, 19];
const isSomebodyOver21 = ages2.some((ages2) => {
    return ages2 >= 21;
});

console.log(isSomebodyOver21);

//문제 26. 아래 배열에 중복된 값이 있는지 확인하는 코드를 작성하세요.
const numbers6 = [1, 2, 3, 4, 2, 5];
const checkdouble = numbers6.some((item, index) => numbers6.indexOf(item) !== index);
console.log(checkdouble);  

//문제 27. 아래 배열을 나이(`age`)를 기준으로 오름차순 정렬하세요.
const people2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mark", age: 35 }
];

const sorted2 = people2.sort((a, b) => {
    return a.age - b.age;
});

console.log(sorted2);

//문제 28. `ages` 배열에서 21세 이상의 요소의 인덱스를 찾으세요.(findIndex)
const ages3 = [16, 18, 22, 20];
const foundIndex = ages3.findIndex((age) => {
    return age >= 21;
});

console.log(foundIndex);

//문제 29. `words` 배열을 쉼표로 구분된 문자열로 변환하세요.(join)
const words = ["Hello", "World", "JavaScript"];
const joined = words.join(" ");

console.log(joined);

//문제 30. 중첩된 배열을 평탄화하여 하나의 배열로 만드세요.(flat)
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];

const flattened = nestedArray.flat(3);

console.log(flattened);
