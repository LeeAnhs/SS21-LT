const colors = [
    'color: red',
    'color: blue', 
    'color: green',
    'color: yellow',
    'color: purple',
    'color: orange',
    'color: pink',
    'color: brown',
    'color: cyan',
    'color: magenta'
];

for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * colors.length);
    console.log('%cMàu sắc đã được thay đổi', colors[random]);
}
