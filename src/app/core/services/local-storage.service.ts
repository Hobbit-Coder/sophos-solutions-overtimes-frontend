import { Injectable } from '@angular/core';
import * as CryptoJS from "crypto-js";
import { environment } from 'src/environments/environment';

@Injectable()
export class LocalStorageService {

  public SetItem(key: string, item: string) {
    let cryptoItem = this.encrypt(item);
    localStorage.setItem(key, cryptoItem)
  }

  public GetItemByKey(key: string): string | null {
    let item = localStorage.getItem(key);

    if (item) {
      return this.decrypt(item);
    } else {
      return null;
    }
  }

  public SetObject<TObject>(key: string, object: TObject) {
    let jsonString = JSON.stringify(object)
    let cryptoItem = this.encrypt(jsonString);

    localStorage.setItem(key, cryptoItem);
  }

  public GetObjectByKey<TObject>(key: string): TObject | null {
    let cryptoObject = localStorage.getItem(key);
    if (cryptoObject)
      return JSON.parse(this.decrypt(cryptoObject));
    else {
      return null;
    }
  }

  public RemoveItem(key: string) {
    localStorage.removeItem(key);
  }

  public ClearAll() {
    localStorage.clear();
  }

  private encrypt(text: string): string {
    return CryptoJS.AES.encrypt(text, environment.localStorageCryptoKey).toString();
  }

  private decrypt(text: string): string {
    return CryptoJS.AES.decrypt(text, environment.localStorageCryptoKey).toString(CryptoJS.enc.Utf8);
  }

}
