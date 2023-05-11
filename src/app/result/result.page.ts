import { Component } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage {

  myDictionary: any[] = [];
  word:string = "";

  constructor(private service: DictionaryService, private route:ActivatedRoute, private storage:Storage) { }
  
  async ionViewWillEnter() {
    await this.storage.create();

    this.word = this.route.snapshot.queryParams['word'];
    this.service.GetDictionaryData(this.word).subscribe(
      (data) => {
        this.myDictionary = data;
      }
    );
  }

  async add() {
    let history: string[] = await this.storage.get("history");
    if(history == null)
    {
      history = [];
    }
    history.push(this.word);
    this.storage.set("history", history);
    //show a toast to show the user a word is added
    await Toast.show({
      text: "Saved '" + this.word + "' for later!",
    });
  }

}
