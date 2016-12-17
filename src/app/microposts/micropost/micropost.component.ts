import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Micropost } from '../micropost';
import {AuthService} from '../../auth/auth.service';
import {MicropostsService} from '../microposts.service';

@Component({
    selector: 'mp-micropost',
    templateUrl: './micropost.component.html',
    styles: []
})
export class MicropostComponent {

    @Input()
    public micropost: Micropost;

    @Output()
    public onDelete: EventEmitter<Micropost> = new EventEmitter();

    constructor(public authService: AuthService, private micropostsService: MicropostsService) {}

    public async deleteMicropost() {
        try {
            await this.micropostsService.deleteMicropost(this.micropost.userId, this.micropost.id);
            this.onDelete.emit(this.micropost);
        } catch (e) {
            throw e;
        }
    }

}
