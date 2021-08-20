import { Component, OnInit } from "@angular/core";
import { ContentService } from "../../services/content.service";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit {
  // content;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    // this.contentService.getContent('/hero').subscribe(response => {
    //   this.content = response;
    // })
  }
}
