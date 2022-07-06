import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnlyRoutesService } from 'src/app/services/only-routes.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.sass']
})
export class FlightsComponent implements OnInit {

  public saveDataApi: any[] = [];

  constructor(
    public onlyRoutesService: OnlyRoutesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtainDataForm();
  }
  obtainDataForm() {
    this.route.queryParams.subscribe(
      params => {
        if (Object.keys(params).length === 0) {
          return
        }
        this.onlyRoutesService.getRoutes(params['level']).subscribe(
          (data: any[]) => {
            this.saveDataApi = data.filter(x => x.departureStation.includes(params['origin']) && x.arrivalStation.includes(params['destination']));
            console.log(this.saveDataApi);
          }
        )
      }
    )
  }
}
