import { Component, OnInit } from '@angular/core';

import { Property } from './property';
import { PropertyService } from './property.service';

@Component({
    selector: 'my-app',
    template: `
        <h1>Connect Angular 2 to Salesforce using Webpack and TypeScript</h1>
        <h2>{{account}}'s properties:</h2>
        <ul *ngFor="let property of properties">
            <li>{{property.id}} - {{property.name}}</li>
        </ul>
    `,
    providers: [PropertyService]
})

export class AppComponent implements OnInit {
    properties: Property[];
    account = 'Niam';

    constructor(private propertyService: PropertyService) {}

    getProperties() {
        this.propertyService.getProperties().then(properies => this.properties = properies);
    }
    ngOnInit() {
        this.getProperties();
    }
}
