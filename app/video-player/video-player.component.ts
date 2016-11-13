import { Component, Input } from '@angular/core';

@Component({
    selector: 'video-player',
    templateUrl: 'app/video-player/video-player.component.html'
})

export class VideoPlayerComponent {

    @Input() vpTitle : string = 'hello there';
    @Input() vpUrl   : string = '';
    @Input() vpYid   : string = '';

}