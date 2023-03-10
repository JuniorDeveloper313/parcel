import anime from "animejs";
import { text } from "./modules/module";
console.log(text);

anime({
    targets:'h1',
    backgroundColor:'hsl(100, 90%, 80%)',
    fontSize:'50px',
    rotate:360,
    duration:2000,
})



// img
const img=document.createElement('img');
document.body.append(img);

console.log(import.meta.url)


const imgUrl = new URL('./media/kevin.jpg',import.meta.url);
img.src = imgUrl;

