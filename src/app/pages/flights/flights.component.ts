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
  public itsQueried: boolean = false;

  public currencyNow: number = 1;

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
        if (params['origin'] == params['destination']) {
          alert("la ruta de origin y destino no pueden ser iguales");
          return;
        }
        this.currencyNow = params['currency'] == null ? 1 : params['currency'];

        this.onlyRoutesService.getRoutes(params['level']).subscribe(
          (data: any[]) => {
            this.itsQueried = true;
            this.saveDataApi = data.filter(x => x.departureStation.includes(params['origin']) || x.arrivalStation.includes(params['destination']));
          }
        )
      }
    )
  }
}
