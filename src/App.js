import React, { useState } from "react";
import "./styles.css";

const music = {
  Rock: [
    {
      name: "Protect the land",
      author: "by - System of a Down",
      rating: "4.3/5",
      link: "https://open.spotify.com/embed/track/11ajcVj3qSyyMPUpTJUP3y"
    },
    {
      name: "Trouble's coming",
      author: "by - Royal Blood",
      rating: "4.1/5",
      link: "https://open.spotify.com/embed/track/5eR6OS3joTAHJToyzehKfu"
    },
    {
      name: "Dirty",
      author: "by - grandson",
      rating: "4/5",
      link: "https://open.spotify.com/embed/track/3MTfE3Mo3lfwAymYLU2luX"
    }
  ],
  Hiphop: [
    {
      name: "No Idea",
      author: "by - Don Toliver",
      rating: "4.5/5",
      link: "https://open.spotify.com/embed/track/3VyjsVV24RmBIbWJAeUJNu"
    },
    {
      name: "Panini",
      author: "by - Lil Nas X",
      rating: "4.3/5",
      link: "https://open.spotify.com/embed/track/6fTt0CH2t0mdeB2N9XFG5r"
    },
    {
      name: "Good News",
      author: "by - Mac Miller",
      rating: "4.2/5",
      link: "https://open.spotify.com/embed/track/3ClBKQkKoaUQ6UOhe2xlJK"
    }
  ],
  Pop: [
    {
      name: "Monster",
      author: "by - Justin Bieber",
      rating: "4.8/5",
      link: "https://open.spotify.com/embed/track/2Z8yfpFX0ZMavHkcIeHiO1"
    },
    {
      name: "Diamonds",
      author: "by - Sam Smith",
      rating: "4.5/5",
      link: "https://open.spotify.com/embed/track/5hvwx5i67IwnCkjl9VHkNv"
    },
    {
      name: "Therefore I Am",
      author: "by - Billie Eilish",
      rating: "4.2/5",
      link: "https://open.spotify.com/embed/track/54bFM56PmE4YLRnqpW6Tha"
    }
  ],
  Kpop: [
    {
      name: "Dynamite",
      author: "by - BTS",
      rating: "4.7/5",
      link: "https://open.spotify.com/embed/track/0t1kP63rueHleOhQkYSXFY"
    },
    {
      name: "How You Like That",
      author: "by - BLACKPINK",
      rating: "4.3/5",
      link: "https://open.spotify.com/embed/track/4SFknyjLcyTLJFPKD2m96o"
    },
    {
      name: "Ice Cream",
      author: "by - Selena Gomez",
      rating: "4.2/5",
      link: "https://open.spotify.com/embed/track/4JUPEh2DVSXFGExu4Uxevz"
    }
  ],
  Jazz: [
    {
      name: "My Foolish Heart",
      author: "by - AL jarreau",
      rating: "4.5/5",
      link: "https://open.spotify.com/embed/track/6RN8GafiF86GkJhQIXyRZa"
    },
    {
      name: "A Love That Will Last",
      author: "by - Renee Olstead",
      rating: "4.2/5",
      link: "https://open.spotify.com/embed/track/6Fno3IHvHoBpYir8rEcYaf"
    },
    {
      name: "At Last",
      author: "by - Randy Crawford",
      rating: "4/5",
      link: "https://open.spotify.com/embed/track/0B6JJNBTsILattY4rACuiw"
    }
  ]
};

const array = Object.keys(music);

export default function App() {
  const [select, setSelect] = useState("Rock");

  return (
    <div className="App">
      <h1>🎧 Enjoy good music</h1>
      <h4>Check out my favourite music!👇</h4>
      <div className="buttons">
        {array.map((genre) => (
          <button key={genre} onClick={() => setSelect(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <h2 className="header">{select}</h2>
      {Object.keys(music[select]).map((gen) => (
        <div className="song">
          <h3 className="song-name">{music[select][gen].name}</h3>
          <h4 className="song-author">{music[select][gen].author}</h4>
          <h4 className="song-rating">{music[select][gen].rating}</h4>
          <iframe
            src={music[select][gen].link}
            width="80%"
            height="70"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
