import { Component } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'
})

export class ProductListComponent {

    pageTitle: string = 'Saved Links';
    nowPlaying: string = 'amy lee';

    links: IProduct[] = [
        {
            'title': 'All Of The Stars - Ed Sheeran',
            'link': 'https://www.youtube.com/watch?v=18lP9SYCt_E',
            'id': '18lP9SYCt_E',
            'rating' : 5
        },
        {
            'title': 'Ryder - Ruins',
            'link': 'https://www.youtube.com/watch?v=p2M8GzCBZkM',
            'id': 'p2M8GzCBZkM',
            'rating' : 1
        },
        {
            'title': 'Imagine Dragons - Not Today (Audio)',
            'link': 'https://www.youtube.com/watch?v=trig1MiEo1s',
            'id': 'trig1MiEo1s',
            'rating' : 3
        },
        {
            'title': 'Imagine Dragons - Demons (Official)',
            'link': 'https://www.youtube.com/watch?v=mWRsgZuwf_8',
            'id': 'mWRsgZuwf_8',
            'rating' : 4
        },
        {
            'title': 'Krewella - Ammunition (Audio)',
            'link': 'https://www.youtube.com/watch?v=YHyJgcgDyrs',
            'id': 'YHyJgcgDyrs',
            'rating' : 4
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

    addYoutubeVideo( event ): void {
        event.preventDefault();
        if (this.videoFormState == false) {
            this.videoFormState = true;
        } else {
            this.videoFormState = false;
        }
    }

    playVideo( link, event ): void {
        // event.preventDefault();
        this.selectedItem = link;
        console.log( link );
    }

    onRatingClicked( message: string ): void {
        console.log( message );
        this.pageTitle = 'Product List: ' + message;
    }
}