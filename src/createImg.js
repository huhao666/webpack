import photo from './66.jpg';
import style from './image.scss';

function createImg(){
  var dom =document.getElementById("root")
  var img = new Image();
  img.className = style.aaa
  img.src = photo
  dom.append(img);
}
export default createImg