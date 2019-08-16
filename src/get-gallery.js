import BlackMirrorCover from "./images/Black Mirror Cover.jpg";
import GameofThronesCover from "./images/Game of Thrones Cover.jpg";
import HannibalCover from "./images/Hannibal Cover.jpg";
import LastChanceUCover from "./images/Last Chance U Cover.jpg";
import PeakyBlindersCover from "./images/Peaky Blinders Cover.jpg";
import LouisWeirdWeekendsCover from "./images/Louis Weird Weekends Cover.jpg";

export default function getGallery() {
    return [
        { tvshow: "black mirror", id: "black-mirror", image: BlackMirrorCover },
        { tvshow: "Game of Thrones", id: "game-of-thrones", image: GameofThronesCover },
        { tvshow: "Hannibal", id: "hannibal", image: HannibalCover },
        { tvshow: "Last Chance U", id: "last-chance-u", image: LastChanceUCover },
        { tvshow: "Peaky Blinders", id: "peaky-blinders", image: PeakyBlindersCover },
        { tvshow: "Louis Weird Weekends", id: "louis-weird-weekends", image: LouisWeirdWeekendsCover }
    ];
}
