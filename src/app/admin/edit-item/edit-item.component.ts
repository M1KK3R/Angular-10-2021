import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("itemId");
    console.log(id);
    this.item = this.itemService.itemsInService.find(item => item.title == id);
    console.log(this.item)
  }

  onSubmit(form: any) {
    if (form.valid) {
    console.log(form.value);
    console.log(form)

    this.itemService.itemsInService.push(form.value);
    
    }
  }

}