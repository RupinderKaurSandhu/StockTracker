import { Component, OnInit } from '@angular/core';
import { StockTrackerService} from '../stock-tracker.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  managearr;
  datafinal = [];
  id: any;

  constructor(private route:ActivatedRoute, 
    private router:Router ,private _stockdetail:StockTrackerService ) {
      this._stockdetail.getdata().subscribe(data => {this.datafinal = data});
      // this.managearr = this.route.params.subscribe(params => {
      //  this.id = params['symbol'] ;
    // });
     
  }

  ngOnInit() {
   
  }

}