import { Component, OnInit, ViewChild } from '@angular/core';
import { MapsAPILoader } from '@agm/core/services/maps-api-loader/maps-api-loader';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PublicationsService } from '../../../services/publications.service';
import { SessionService } from '../../../services/session.service';
import { ProfileService } from '../../../services/profile.service';
import { FormControl } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { NgZone } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';
import {} from '@types/googlemaps';
declare var google: any;


@Component({
  selector: 'app-new-publication',
  templateUrl: './new-publication.component.html',
  styleUrls: ['./new-publication.component.css']
})
export class NewPublicationComponent implements OnInit {
  private map: any;
  private google: any;
  user: any;
  title: string;
  userId: any;
  text: string;
  publications: any;
  resume: string;


  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private pubService: PublicationsService,
    private authService: SessionService,
    private profileService: ProfileService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
    
  ) { }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.pubService.getList().subscribe(list => {
        this.publications = list;
        this.user = this.authService.getUser();
        console.log(this.user)
      })
    });
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  };

  newPub(){
      this.pubService.newPub(this.title, this.text, this.user._id, this.resume,  this.latitude, this.longitude)
      .subscribe()
    }
    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }
}
