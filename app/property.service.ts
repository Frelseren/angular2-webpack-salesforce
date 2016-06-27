import { Injectable } from '@angular/core';

import { Property } from './property';
import { PROPERTIES } from './mocks/mock-properties';

@Injectable()
export class PropertyService {
    getProperties() {
        return Promise.resolve(PROPERTIES);
    }
}
