import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef } from '@angular/material/dialog';
import { ConnectService } from "../../services/services.service";

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {

  imageChangedEvent: any ='';
  croppedImage: any ='';

  constructor(private dataService: ConnectService, public dialogRef: MatDialogRef<ImageDialogComponent>) { }

  ngOnInit() {
  }

  fileChangeEvent(event:any) {
    this.imageChangedEvent = event;
  }

  // fileUnchangedAction(event:any){
  //   this.imageChangedEvent = event;
  // }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
    console.log("Cropped Image... ",this.croppedImage);  
  }
  uploadImage(){
    const fdata = new FormData;
    fdata.append('file',this.croppedImage);
    this.dialogRef.close();
    
    let options = {
      data: fdata,
      purpose: 'user/uploadProfileImage'
    }

    this.dataService.imageUserService(options).subscribe((response:any) => {
      localStorage.setItem('imageUrl', response.status.imageUrl);   
      this.dataService.changeMessage("Image set NOW...");
      console.log(response);
    });
  }
  UploadImg(){
    const fdata = new FormData;
    fdata.append('file',this.croppedImage);
    this.dialogRef.close();
    let options={
      data: fdata,
      purpose: 'user/uploadProfileImage'
    }
    this.dataService.imageUserService(options).subscribe((response:any)=>{
      localStorage.setItem('imageUrl',response.status.imageUrl);
      this.dataService.changeMessage("image is done");
      console.log(response);

    });

  }

}

