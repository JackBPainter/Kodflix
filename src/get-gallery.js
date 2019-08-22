import BlackMirrorCover from "./images/Black Mirror Cover.jpg";
import GameofThronesCover from "./images/Game of Thrones Cover.jpg";
import HannibalCover from "./images/Hannibal Cover.jpg";
import LastChanceUCover from "./images/Last Chance U Cover.jpg";
import PeakyBlindersCover from "./images/Peaky Blinders Cover.jpg";
import LouisWeirdWeekendsCover from "./images/Louis Weird Weekends Cover.jpg";

export default function getGallery() {
    return [
        { title: "Black Mirror", id: "black-mirror", image: BlackMirrorCover },
        { title: "Game of Thrones", id: "game-of-thrones", image: GameofThronesCover },
        { title: "Hannibal", id: "hannibal", image: HannibalCover },
        { title: "Last Chance U", id: "last-chance-u", image: LastChanceUCover },
        { title: "Peaky Blinders", id: "peaky-blinders", image: PeakyBlindersCover },
        { title: "Louis Weird Weekends", id: "louis-weird-weekends", image: LouisWeirdWeekendsCover }
    ];
}
