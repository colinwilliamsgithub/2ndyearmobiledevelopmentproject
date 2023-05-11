import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Toast } from '@capacitor/toast';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage{

  history:string[] = [];

  constructor(private storage:Storage, private router:Router) {}

  async ionViewWillEnter() {
    await this.storage.create();
    this.history = await this.storage.get("history");
    }

    view(word:string) {
      const navigationExtras: NavigationExtras = {
        queryParams: {
          word: word
        }
      };
      this.router.navigate(["result"], navigationExtras);
    }

    async delete(wordToDelete: string) {
      this.history = this.history.filter(word => word != wordToDelete);
      this.storage.set("history", this.history);
      //show a toast to show the user a word is deleted
      await Toast.show({
        text: "Deleted '" + wordToDelete + "' from your history!",
      });
    }

}
