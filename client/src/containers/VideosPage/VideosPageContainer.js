import React, { Component } from 'react';
import { VideoItem } from './../../components/index';

const videosJson ={
     videos : [
        {
            id: 1,
            title: 'QUAY VIDEO 4K',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
            camera: 'MÁY QUAY CANON XC10 4K',
            video_director: 'VICTOR VŨ',
            video_ekip: 'EKIP A',
            video_src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
        },
        {
            id: 2,
            title: 'QUAY VIDEO HD',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
            camera: 'MÁY QUAY CANON XC10 4K',
            video_director: 'VICTOR VŨ',
            video_ekip: 'EKIP A',
            video_src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
        },
        {
            id: 3,
            title: 'QUAY VIDEO 4K',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
            camera: 'MÁY QUAY CANON XC10 4K',
            video_director: 'VICTOR VŨ',
            video_ekip: 'EKIP A',
            video_src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
        },
        {
            id: 4,
            title: 'QUAY VIDEO HD',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
            camera: 'MÁY QUAY CANON XC10 4K',
            video_director: 'VICTOR VŨ',
            video_ekip: 'EKIP A',
            video_src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
        }
    ]
}
const videos = [
    {
        id: 1,
        title: 'QUAY VIDEO 4K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
        camera: 'MÁY QUAY CANON XC10 4K',
        director: 'VICTOR VŨ',
        ekip: 'EKIP A',
        src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
    },
    {
        id: 2,
        title: 'QUAY VIDEO HD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
        camera: 'MÁY QUAY CANON XC10 4K',
        director: 'VICTOR VŨ',
        ekip: 'EKIP A',
        src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
    },
    {
        id: 3,
        title: 'QUAY VIDEO 4K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
        camera: 'MÁY QUAY CANON XC10 4K',
        director: 'VICTOR VŨ',
        ekip: 'EKIP A',
        src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
    },
    {
        id: 4,
        title: 'QUAY VIDEO HD',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, nostrum, cumque culpa provident aliquam commodi assumenda laudantium magnam illo nostrum. Donec nibh sapien, molestie quis elementum et, dim non atino ipsum.',
        camera: 'MÁY QUAY CANON XC10 4K',
        director: 'VICTOR VŨ',
        ekip: 'EKIP A',
        src: 'https://www.youtube.com/embed/FN7ALfpGxiI?rel=0&controls=0&showinfo=0'
    }
];


const renderVideos = (videos) => {
    var result = null;
    if (videos.length > 0) {
        result = videos.map((video, index) => {
            return (
                <VideoItem key={index} video={video} />
            );
        });
    }
    return result;
}

class VideosPageContainer extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-xs-12">
                        {renderVideos(videos)}
                    </div>
                    <nav className="gla_blog_pag">
                        <ul className="pagination">
                            <li><a href="#"><i className="ti ti-angle-left" /></a></li>
                            <li className="active"><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className="ti ti-angle-right" /></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default VideosPageContainer;
