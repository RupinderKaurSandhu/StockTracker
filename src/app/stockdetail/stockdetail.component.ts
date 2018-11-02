import { Component, OnInit } from '@angular/core';
import { StockTrackerService} from '../stock-tracker.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stockdetail',
  templateUrl: './stockdetail.component.html',
  styleUrls: ['./stockdetail.component.css']
})
export class StockdetailComponent implements OnInit {
 data = [];
  constructor( private _stockdetail:StockTrackerService) { }

  ngOnInit() {
     this._stockdetail.getdata().subscribe(data => {this.data = data});
  }
}
