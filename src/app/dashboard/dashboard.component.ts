import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'app/produit/produit.service';
import { UserService } from 'app/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private produitService: ProduitService,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.loadData();
  }

  produitData: any = {
    labels: [],
    datasets: []
  };

  userData: any = {
    labels: [],
    datasets: []
  };


  loadData() {

    const quantite = {
      label: "Quantite",
      data: [],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 99, 132)'
    }

    const prixUnitaire = {
      label: "Prix unitaire",
      data: [],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 99, 132)'
    }

    const dataSetUser = {
      label: "Role",
      data: [],
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0, 99, 132)'
    }

    this.produitService.getAll().subscribe(
      list => {
        console.log('list', list);
        list.forEach(produit => {
          this.produitData.labels.push(produit.ref);
          quantite.data.push(produit.quantite);
          prixUnitaire.data.push(produit.prixUnitaire);
        })
      }

    );


    this.produitData.datasets.push(quantite);
    this.produitData.datasets.push(prixUnitaire);

    //Users
    this.userData.labels.push('ROLE_ADMIN');
    this.userData.labels.push('ROLE_USER');

    this.userService.getAll().subscribe(
      list => {
        let adminLength = 0;
        
        list.forEach(user => user.roles.forEach(role => 
          {
            if (role.name == 'ROLE_ADMIN'){
                adminLength ++;
            }
          }
          )
        );
        dataSetUser.data.push(adminLength);
        let userLength = 0;
        list.forEach(user => user.roles.forEach(role => 
          {
            if (role.name == 'ROLE_USER'){
                userLength ++;
            }
          }
          )
        );
        dataSetUser.data.push(userLength);

      }
    );


    this.userData.datasets.push(dataSetUser); 

  }



}
