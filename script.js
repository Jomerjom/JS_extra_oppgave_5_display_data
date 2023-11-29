const peopleArray = [
    {
      name: "John Doe",
      age: 25,
      hobbies: ["Reading", "Hiking"],
      img: "images/m1.webp"
    },
    {
      name: "Jane Smith",
      age: 30,
      hobbies: ["Painting", "Traveling"],
      img: "images/f1.webp"
    },
    {
      name: "Bob Johnson",
      age: 22,
      hobbies: ["Coding", "Gaming"],
      img: "images/m2.webp"
    },
    {
      name: "Alice Brown",
      age: 28,
      hobbies: ["Cooking", "Photography"],
      img: "images/f2.webp"
    },
    {
      name: "David Wilson",
      age: 35,
      hobbies: ["Running", "Music"],
      img: "images/m3.webp"
    },
    {
      name: "Emily Davis",
      age: 26,
      hobbies: ["Dancing", "Yoga"],
      img: "images/f3.webp"
    },
    {
      name: "Chris Miller",
      age: 32,
      hobbies: ["Fishing", "Camping"],
      img: "images/m4.webp"
    },
    {
      name: "Sophia Garcia",
      age: 29,
      hobbies: ["Writing", "Reading"],
      img: "images/f4.webp"
    },
    {
      name: "Michael Martinez",
      age: 27,
      hobbies: ["Swimming", "Playing Guitar"],
      img: "images/m5.webp"
    },
    {
      name: "Olivia Robinson",
      age: 31,
      hobbies: ["Skiing", "Travelling"],
      img: "images/f5.webp"
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