import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';
import style from './index.scss';
import photo from './66.jpg';
import createImg from './createImg.js';

Header();
Content();
Footer();

createImg()

var dom =document.getElementById("root")
  var img = new Image();
  img.src = photo;
  img.classList.add(style.myImg);
  dom.append(img);