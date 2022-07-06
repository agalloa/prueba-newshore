import { Component, OnInit } from '@angular/core';
import { OnlyRoutesService } from 'src/app/services/only-routes.service';

@Component({
  selector: 'app-top-most-searched',
  templateUrl: './top-most-searched.component.html',
  styleUrls: ['./top-most-searched.component.sass']
})
export class TopMostSearchedComponent implements OnInit {
  public selectRoutes: any;
  constructor(
    public onlyRoutesService: OnlyRoutesService,
  ) { }

  ngOnInit(): void {
    this.loadInfo();
  }
  loadInfo() {
    this.onlyRoutesService.getListCity().subscribe(
      data => {
        this.selectRoutes = data;
      }
    )
  }
}
