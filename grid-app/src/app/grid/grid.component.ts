// grid.component.ts

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item.model';
import { CdkColumnDef } from '@angular/cdk/table';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [CdkColumnDef]
})
export class GridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource: Item[] = [];
  formdata: any = {name:"",description:""}

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSource = this.dataService.getItems();
  }

  dummy(): void{
    console.log("Hello");
  }
  addNewItem(): void {
    
    const newItem: Item = {
      id: this.generateUniqueId(),
      name: 'New Item',
      description: 'Description for the new item',
    };

    this.dataSource.push(newItem);
    this.dataService.addItem(newItem);
  }

  updateItem(item: Item): void {
    // Assuming you have a method in your data service to update an item
    const updatedItem: Item = {
      id: item.id,
      name: 'Updated Item',
      description: 'Updated description',
    };

    // Update the item in the data source
    const index = this.dataSource.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.dataSource[index] = updatedItem;
      this.dataService.updateItem(updatedItem);
    }
  }

  deleteItem(itemId: number): void {
    // Assuming you have a method in your data service to delete an item
    // Delete the item from the data source
    this.dataSource = this.dataSource.filter((item) => item.id !== itemId);
    console.log("Deleted Item is",itemId)
    // Delete the item in the data service
    this.dataService.deleteItem(itemId);

  }

  viewDetails(item: Item): void {
    console.log('View details for:', item);
    // You can open a modal, navigate to a details page, or perform any other action here
  }

  private generateUniqueId(): number {
    return this.dataSource.length + 1;
  }
}
