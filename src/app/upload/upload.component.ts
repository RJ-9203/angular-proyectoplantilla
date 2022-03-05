import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/service/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  data:any
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }


  upload(event: any){
    console.log( event.target.files[0] )
    this.data = event.target.files[0]
  }

  subirDocumento(){
   this.uploadService.upload(this.data).subscribe((res:any)=>{
     console.log( res )
   })
  }
}