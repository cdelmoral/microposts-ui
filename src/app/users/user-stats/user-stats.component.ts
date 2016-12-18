import {Component, Input} from '@angular/core';
import {User} from '../user';

@Component({
    selector: 'mp-user-stats',
    templateUrl: './user-stats.component.html',
    styles: []
})
export class UserStatsComponent {

    @Input()
    public user: User;

}
