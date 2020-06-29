import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: "./event-thumbnail.component.html",
    styles: [`
        .green { color: #04a004 !important;}
        .bold { font-weight: 600; }
        .thumbnail {min-height: 210px}
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any

    getStartTime(){
        if(this.event && this.event?.time == "8:00 am"){
            return "green bold";
            return '';
        }
    }

}