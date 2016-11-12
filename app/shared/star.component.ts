import { Component, OnChanges } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent {
    rating : number = 4;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

}