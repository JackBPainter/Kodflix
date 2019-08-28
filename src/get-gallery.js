import BlackMirrorCover from "./images/Black Mirror Cover.jpg";
import GameofThronesCover from "./images/Game of Thrones Cover.jpg";
import HannibalCover from "./images/Hannibal Cover.jpg";
import LastChanceUCover from "./images/Last Chance U Cover.jpg";
import PeakyBlindersCover from "./images/Peaky Blinders Cover.jpg";
import LouisWeirdWeekendsCover from "./images/Louis Weird Weekends Cover.jpg";

export default function getGallery() {
  return [
    {
      title: "Black Mirror",
      id: "black-mirror",
      image: BlackMirrorCover,
      synopsis:
        "An anthology series exploring a twisted, high-tech world where humanity's greatest innovations and darkest instincts collide."
    },
    {
      title: "Game of Thrones",
      id: "game-of-thrones",
      image: GameofThronesCover,
      synopsis:
        "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years."
    },
    {
      title: "Hannibal",
      id: "hannibal",
      image: HannibalCover,
      synopsis:
        "Explores the early relationship between the renowned psychiatrist and his patient, a young FBI criminal profiler, who is haunted by his ability to empathize with serial killers."
    },
    {
      title: "Last Chance U",
      id: "last-chance-u",
      image: LastChanceUCover,
      synopsis:
        "Intense look inside the world of junior college football, chronicling the stories of players and coaches in the classroom and on the field."
    },
    {
      title: "Peaky Blinders",
      id: "peaky-blinders",
      image: PeakyBlindersCover,
      synopsis:
        "A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
    },
    {
      title: "Louis Weird Weekends",
      id: "louis-weird-weekends",
      image: LouisWeirdWeekendsCover,
      synopsis:
        "Louis Theroux documents some of the US's most bizarre happenings, events and rituals, by getting involved himself."
    }
  ];
}
