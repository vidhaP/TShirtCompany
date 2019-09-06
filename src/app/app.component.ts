import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  showDetails=false;
  buyButton=false;
  tshirts=[];
  tshirtdetails:any;

  addtocart(t)
  {
    this.tshirtdetails=t;
    this.showDetails=true;
    this.buyButton=true;

  }
  cancel(d)
  {
    this.showDetails=false;
    this.buyButton=false;
  }
  
  update(d):void
  {
    console.log(d.productId);
    this.showDetails=false;
    this.buyButton=false;
  }
  name="vidha paradkar";
  ngOnInit()
  {
    this.tshirts=this.getTShirts();
    console.log(this.tshirts);
  }
  getTShirts() {
    return  [
      {
        "productId": 1,
        "productName": "black shirt female",
        "productCode": "GDN-0011",
        "description": "this is a female black tshirt",
        "price": 19.95,
        "backimage":"https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/black1_B.jpg?raw=true",
        "imageUrl": "https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/black1_f.jpg?raw=true",
        "quantity":40,
        "imggsrc":"",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 2,
        "productName": "blue shirt female",
        "productCode": "GDN-0023",
        "description": "this is a blue female shirt",
        "price": 32.99,
        "quantity":80,
        "backimage":"https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/blue1_B.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/blue1_F.jpg?raw=true"
      },
      {
        "productId": 5,
        "productName": "grey shirt female",
        "productCode": "TBX-0048",
        "description": "this is a grey shirt female",
        "price": 8.9,
        "starRating": 4.8,
        "quantity":23,
        "backimage":"https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/grey1_B.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/grey1_F.jpg?raw=true"
      },
      {
        "productId": 8,
        "productName": "whhite shirt female",
        "productCode": "TBX-0022",
        "description": "this is a white shirt female ",
        "price": 11.55,
        "quantity":253,
        "backimage":"https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/white1_B.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/white1_F.jpg?raw=true"
      },
      {
        "productId": 10,
        "productName": "yellow shirt female",
        "productCode": "GMG-0042",
        "description": "this is a yellow shirt female",
        "price": 35.95,
        "quantity":66,
        "backimage":"https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/yellow1_B.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/vidhaP/TShirtCompany/blob/master/src/assets/myntra/yellow1_F.jpg?raw=true"
      }
    ]
  }
}
