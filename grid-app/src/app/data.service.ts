import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: Item[] = [];

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  updateItem(updatedItem: Item): void {
    const index = this.items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }

  deleteItem(itemId: number): void {
    this.items = this.items.filter((item) => item.id !== itemId);
  }

  addTestData(): void {
    const testData: Item[] = [
      { id: 1, name: 'Test Item 1', description: 'Description 1' },
      { id: 2, name: 'Test Item 2', description: 'Description 2' },
      // Add more test data as needed
    ];

    this.items = [...this.items, ...testData];
  }
}
