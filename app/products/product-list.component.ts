import { Component } from '@angular/core';

@Component({
    selector : 'pm-products',
    templateUrl : 'app/products/product-list.component.html'
})

export class ProductListComponent {
    pageTitle : string = 'Saved Links';
    links : any[] = [
        {
            'title' : 'start a discussion - prijm',
            'link' : 'http://prijm.com'
        },
        {
            'title' : 'Facebook',
            'link' : 'http://facebook.com'
        },
        {
            'title' : 'Google',
            'link' : 'http://google.com'
        }
    ];
}