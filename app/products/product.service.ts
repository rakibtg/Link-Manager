import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable()
export class ProductService {

    getProducts(): IProduct[] {
        return [
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
        ]
    }

}