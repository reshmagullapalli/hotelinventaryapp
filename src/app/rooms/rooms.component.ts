import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit,QueryList,ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room } from "./rooms";
import { RoomList } from "./rooms";
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck ,AfterViewInit,AfterViewChecked{

  hotelName = "Happy Hotel";
  no_of_rooms = 10;
  hideRooms = false;
  selectedRoom!: RoomList;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  title = 'Room List';
  roomList: RoomList[] = [];
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponenet!: QueryList<HeaderComponent>;
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.headerComponent);
    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionert, Free Wi-Fi, Tv ,Bathroom,Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('2-Dec-2022'),
      checkoutTime: new Date('3-Dec-2022'),
      rating: 4.565,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditionert, Free Wi-Fi, Tv ,Bathroom,Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('2-Dec-2022'),
      checkoutTime: new Date('3-Dec-2022'),
      rating: 3.4,
    },
    {
      roomNumber: 5,
      roomType: 'Private Suite',
      amenities: 'Air Conditionert, Free Wi-Fi, Tv ,Bathroom,Kitchen',
      price: 15000,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('2-Dec-2022'),
      checkoutTime: new Date('3-Dec-2022'),
      rating: 2.6,
    },];
  }
  ngDoCheck(): void {
    console.log('On Cahnges Is Called');
  }
  ngAfterViewInit(): void {
    this.headerComponent.title="Rooms View";
    this.headerChildrenComponenet.last.title="Last Title";
  }
  ngAfterViewChecked():void{
    
  }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }
  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
  addRoom() {
    const room: RoomList = {
      roomNumber: 6,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner,Free Wi-Fi,Tv,Bathroom,Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      checkinTime: new Date('7-Dec-2022'),
      checkoutTime: new Date('8-Dec-2022'),
      rating: 4.35,
    };
    //this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
