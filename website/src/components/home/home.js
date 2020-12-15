import './home.css';
import photo from './photo.PNG';

function Home() {
  return (
    <div className="Home">
      <div class="header">
        <img class="photo" src={photo} alt="creator"/>
        <div class="text">
          <h3 class="title anim"> Hi, I'm Taylor! </h3>
          <a >
          My inspiration came from an old canvas I couldn’t fix, I used the opposite side and this style continued to grow from there. I love simplicity and minimalism, this is absolutely that. I’m very passionate about art but check out ’additional skills‘ to see what else you can request!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;


  
