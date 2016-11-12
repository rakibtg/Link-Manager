import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {

    pageTitle: string = 'Saved Links';
    nowPlaying: string = '';
    links: any[] = [
        {
            'title': 'Ryder - Ruins',
            'link': 'https://www.youtube.com/watch?v=p2M8GzCBZkM',
            'id': 'p2M8GzCBZkM',
            'rating' : 2
        },
        {
            'title': 'Imagine Dragons - Not Today (Audio)',
            'link': 'https://www.youtube.com/watch?v=trig1MiEo1s',
            'id': 'trig1MiEo1s',
            'rating' : 4
        },
        {
            'title': 'Imagine Dragons - Demons (Official)',
            'link': 'https://www.youtube.com/watch?v=mWRsgZuwf_8',
            'id': 'mWRsgZuwf_8',
            'rating' : 3
        },
        {
            'title': 'Krewella - Ammunition (Audio)',
            'link': 'https://www.youtube.com/watch?v=YHyJgcgDyrs',
            'id': 'YHyJgcgDyrs',
            'rating' : 7
        },
        {
            'title': 'Backstreet Boys - In a World Like This',
            'link': 'https://www.youtube.com/watch?v=ynBplqio1R4',
            'id': 'ynBplqio1R4',
            'rating' : 2
        }
    ];
    videoFilter: string = '';
    videoFormState: boolean = false;
    selectedItem = '';

    addYoutubeVideo(): void {
        if (this.videoFormState == false) {
            this.videoFormState = true;
        } else {
            this.videoFormState = false;
        }
    }

    playVideo( link ): void {
        this.selectedItem = link;
        console.log( link );
    }
}