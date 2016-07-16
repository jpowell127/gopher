import {Component} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'home',
  pipes: [],
  providers: [],
  directives: [AlertComponent],
  templateUrl: `
    <form class="form-inline">
      <input type="text" [(ngModel)]="item" placeholder="Gopher Item" (keyup.enter)="addItem(item)">
      <button type="button" class='btn btn-primary' (click)="addItem(item)">Add Item</button>
    </form>
    <alert *ngFor="let item of items;let i = index" [type]="item.type" dismissible="true" (close)="deleteItem(i)">
      {{ item?.msg }}
    </alert>
  `
})
export class Home {
  public items: Array<Object> = [];
  public item: String;

  public deleteItem(i: number):void {
    this.items.splice(i, 1);
  }

  public addItem(item: string):void {
    this.items.push({msg: item, type: 'info', closable: true});
    this.item = null;
  }

}
