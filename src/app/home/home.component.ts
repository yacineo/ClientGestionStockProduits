import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ClientGestionStockProduits';
  showHideSideBar : boolean = false;

constructor(private router: Router,private appService : AppService){

}

onShowSideBarChange(showHideSideBar){
    this.showHideSideBar = showHideSideBar;
  }

  ngOnInit(){
    if(!this.appService.authenticated){
      this.router.navigateByUrl('/login');
    }
    else{
      this.router.navigateByUrl('/home');
    }
  }

}
