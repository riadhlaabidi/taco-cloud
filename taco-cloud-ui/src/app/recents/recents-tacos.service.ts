import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";

@Injectable({
  providedIn: 'root'
})
export class RecentTacosService {

  constructor(private apiService: ApiService) {
  }

  getRecentTacos() {
    return this.apiService.get('/design/recent');
  }

}
