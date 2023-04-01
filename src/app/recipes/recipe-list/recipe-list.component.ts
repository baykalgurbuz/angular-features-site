import { Component ,OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','A Test Image','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'),
    new Recipe('A Test Recipe','A Test Image','https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg')
  ];
  constructor(){}

  ngOnInit(){}

}
