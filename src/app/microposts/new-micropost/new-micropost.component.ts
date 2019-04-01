import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

// import { FlashMessagesService } from 'angular2-flash-messages';

import { MicropostsService } from '../microposts.service';

@Component({
    selector: 'mp-new-micropost',
    templateUrl: './new-micropost.component.html',
    styles: []
})
export class NewMicropostComponent {

    @Input()
    public userId: string;

    public micropostContent: string;
    public submitted: boolean = false;

    constructor(
        private micropostsService: MicropostsService,
        private router: Router,
        // private flashService: FlashMessagesService
    ) { }

    public async onSubmit() {
        this.submitted = true;
        try {
            await this.micropostsService.createMicropost(this.userId, this.micropostContent);
        } catch (e) {
            // this.flashService.show(e.message, {timeout: 5000, cssClass: 'alert-danger'});
        } finally {
            this.submitted = false;
        }
    }
}
