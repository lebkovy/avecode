import {Component, Input, OnInit} from '@angular/core';
import {LatestService} from "../../shared/services/latest.service";

@Component({
  selector: 'latest-app',
  templateUrl: './latest-app.component.html',
  styleUrls: ['./latest-app.component.scss']
})
export class LatestAppComponent {

  constructor(private latestService: LatestService) {
  }

  get androidLink() {
    return this.latestService.androidLink;
  }

  get title() {
    return this.latestService.title;
  }

  get subtitle() {
    return this.latestService.subtitle;
  }

  get description() {
    return this.latestService.description;
  }

}
