const names = ["John", "Jane", "Jim", "Jack", "Bob"];

for (let i = 0; i < names.length; i++) {
    const firstLetter = names[i][0].toLowerCase();

    if (firstLetter === 'j') {
        console.log(`Goodbye J${names[i].slice(1)}`);
    } else {
        console.log(`Hello ${names[i]}`);
    }
}
