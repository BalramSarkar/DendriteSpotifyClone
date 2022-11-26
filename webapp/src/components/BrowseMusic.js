import React from 'react'
import "./../css/Browsemusic.css";

import BrowseMusicRow from './BrowseMusicRow';
import BrowseMusicPlaylist from './BrowseMusicPlaylist';

import Woman from "./../images/woman.jpg";

import JustGood from "./../images/justgoodmusic.jpg";
import Ed from "./../images/ed.jpg";
import Mint from "./../images/mint.jpg";
import HotCountry from "./../images/hotcountry.jpg";

import Whitenoise from "./../images/whitenoise.jpg";
import Jazzbackground from "./../images/jazzbackground.jpg";
import Peacefulpiano from "./../images/peacefulpiano.jpg";
import Lofibeats from "./../images/lofibeats.jpg";
import Deepfocus from "./../images/deepfocus.jpg";
import Brainfood from "./../images/brainfood.jpg";
import Intensestudy from "./../images/intensestudy.jpg";

import Goodvibes from "./../images/goodvibes.jpg";
import Feelinmyself from "./../images/feelinmyself.jpg";
import Parkhangs from "./../images/parkhangs.jpg";
import Moodbooster from "./../images/moodbooster.jpg";
import Mylifeisamovie from "./../images/mylifeisamovie.jpg";
import Haveagreatday from "./../images/haveagreatday.jpg";

function BrowseMusic() {
    return (
        <div className="browse-music">
            <div className="browse-music-row">
                <BrowseMusicRow title="RELEASED THIS WEEK" description={null} seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Brainfood} title="Brain Food" description="Hypnotic electronic for studies and a relax." likes="3,522,763 likes" songs="100 songs" playTime="7 hr 9 min" />
                    <BrowseMusicPlaylist image={Feelinmyself} title="Feelin' Myself" description="The hip-hop playlist that's a whole mood. Cover: Doja Cat; Art by Laci Jordan" likes="1,791,272 likes" songs="50 songs" playTime="2 hr 21 min" />
                    <BrowseMusicPlaylist image={JustGood} title="Just Good Music" description="JP Saxe is taking over to share tracks of his new album and other favorites" likes="665,782 likes" songs="87 songs" playTime="4 hr 47 min" />
                    <BrowseMusicPlaylist image={Woman} title="Songwriters" description="The very best new songs from modern singer-songwriters. Cover: JP Saxe" likes="8,826 likes" songs="95 songs" playTime="5 hr 28 min" />
                    <BrowseMusicPlaylist image={Mint} title="mint" description="The world's biggest dance hits. Featuring new music from Dillon Francis & Shift K3Y, Diplo, Damian Lazarus & Jungle, and more!" likes="5,840,032 likes" songs="95 songs" playTime="5 hr" />
                    <BrowseMusicPlaylist image={HotCountry} title="Hot Country" description="Today's top country hits of the week, worldwide! Cover: Lady A" likes="6,401,143 likes" songs="52 songs" playTime="2 hr 49 min" />
                </div>
            </div>
            <div className="browse-music-row">
                <BrowseMusicRow title="Mood" description="Playlists to match your mood." seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Ed} title="Ed Sheeran's Top Hits" description="Ed Sheeran is on top of the Hottest 50!" likes="28,767,617 likes" songs="56 songs" playTime="2 hr 54 min" />
                    <BrowseMusicPlaylist image={Moodbooster} title="Mood Booster" description="Get happy with today's dose of feel-good songs!" likes="6,741,803 likes" songs="78 songs" playTime="4 hr 7 min" />
                    <BrowseMusicPlaylist image={Parkhangs} title="park hangs" description="grab a blanket and get the good vibes going" likes="293,647 likes" songs="50 songs" playTime="2 hr 41 min" />
                    <BrowseMusicPlaylist image={Haveagreatday} title="Have a Great Day!" description="Feel great with these timelessly fun songs!" likes="5,029,035 likes" songs="102 songs" playTime="6 hr" />
                    <BrowseMusicPlaylist image={Goodvibes} title="Good Vibes" description="Set it off with these epic anthems. Only good vibes here!" likes="2,705,191 likes" songs="138 songs" playTime="7 hr 30 min" />
                    <BrowseMusicPlaylist image={Mylifeisamovie} title="my life is a movie" description="every main character needs their soundtrack" likes="623,194 likes" songs="75 songs" playTime="4 hr 32 min" />
                </div>
            </div>
            
            <div className="browse-music-row">
                <BrowseMusicRow title="Focus" description="Music to help you concentrate." seeAll />
                <div className="browse-music-row-bottom">
                    <BrowseMusicPlaylist image={Lofibeats} title="Lo-Fi Beats" description="Beats to relax, study, and focus." likes="4,091,116 likes" songs="595 songs" playTime="23 hr" />
                    <BrowseMusicPlaylist image={Jazzbackground} title="Jazz in the Background" description="Soft jazz for all your activities" likes="348,771 likes" songs="173 songs" playTime="11 hr" />
                    <BrowseMusicPlaylist image={Whitenoise} title="White Noise" description="Welcome to the soothing hum..." likes="507,519 likes" songs="263 songs" playTime="11 hr" />    
                    <BrowseMusicPlaylist image={Intensestudy} title="Intense Studying" description="Focus-enhancing piano for your study session." likes="2,334,270 likes" songs="213 songs" playTime="9 hr" />``
                    <BrowseMusicPlaylist image={Deepfocus} title="Deep Focus" description="Keep calm and focus with ambient and post-rock music." likes="3,472,764 likes" songs="194 songs" playTime="9 hr 30 min" />
                    <BrowseMusicPlaylist image={Peacefulpiano} title="Peaceful Piano" description="Relax and indulge with beautiful piano pieces" likes="6,238,401 likes" songs="351 songs" playTime="15 hr" />
                </div>
            </div>
        </div>
    )
}

export default BrowseMusic
