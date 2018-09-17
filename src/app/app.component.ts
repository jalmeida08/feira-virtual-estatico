import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Feira Virtual';

  constructor(
    private _dataService: DataService,
  ) {
    this._dataService = _dataService;
  }

  ngOnInit(): void {
    this._dataService.checarUsuarioAutorizado();
  }
}
