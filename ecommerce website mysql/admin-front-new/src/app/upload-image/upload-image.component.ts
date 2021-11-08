import { ProductListService } from './../product-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
     
  selectedFile = null
  constructor(
    private productListService: ProductListService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
    ) { }

  ngOnInit(): void {
  }
  onImageSelect(event){
    // console.log(event)
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

  onUplaodImage(){
    const productId = this.activatedRoute.snapshot.queryParams['productId']
    console.log(productId)
    this.productListService
    .uploadImage(productId,this.selectedFile)
    .subscribe(response => {
         if(response['status'] == 'success'){
           alert(`image uploded successfully`)
           this.router.navigate(['/product-list'])
         }else{
           console.log(response['error'])
         }
    })
  }

}
