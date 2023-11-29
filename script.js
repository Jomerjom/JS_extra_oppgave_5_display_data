const peopleArray = [
    {
      name: "John Doe",
      age: 25,
      hobbies: ["Reading", "Hiking"],
      img: "images/m1.jpg"
    },
    {
      name: "Jane Smith",
      age: 30,
      hobbies: ["Painting", "Traveling"],
      img: "images/f1.jpg"
    },
    {
      name: "Bob Johnson",
      age: 22,
      hobbies: ["Coding", "Gaming"],
      img: "images/m2.jpg"
    },
    {
      name: "Alice Brown",
      age: 28,
      hobbies: ["Cooking", "Photography"],
      img: "images/f2.jpg"
    },
    {
      name: "David Wilson",
      age: 35,
      hobbies: ["Running", "Music"],
      img: "images/m3.jpg"
    },
    {
      name: "Emily Davis",
      age: 26,
      hobbies: ["Dancing", "Yoga"],
      img: "images/f3.jpg"
    },
    {
      name: "Chris Miller",
      age: 32,
      hobbies: ["Fishing", "Camping"],
      img: "images/m4.jpg"
    },
    {
      name: "Sophia Garcia",
      age: 29,
      hobbies: ["Writing", "Reading"],
      img: "images/f4.jpg"
    },
    {
      name: "Michael Martinez",
      age: 27,
      hobbies: ["Swimming", "Playing Guitar"],
      img: "images/m5.jpg"
    },
    {
      name: "Olivia Robinson",
      age: 31,
      hobbies: ["Skiing", "Travelling"],
      img: "images/f5.jpg"
    }
  ];


const peopleoutput = document.getElementById("people-output");

peopleArray.forEach((person) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = person.img;

    const name = document.createElement("h2");
    name.textContent = person.name;

    const age = document.createElement("p");
    age.textContent = `Age: ${person.age}`;

    const hobbies = document.createElement("ul");
    hobbies.textContent = "Hobbies: ";
    person.hobbies.forEach((hobby, index) => {
        const li = document.createElement("li");
        li.textContent = hobby;
        if (index < person.hobbies.length - 1) {
            li.textContent += ",";
        }
        hobbies.append(li);
    });

    card.append(name, age, img, hobbies);
    peopleoutput.append(card);
});