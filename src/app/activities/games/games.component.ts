import { Component, OnInit } from '@angular/core';

import { LogService } from "../../service/log.service";
import { gamesTitle } from "../../properties/properties";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
/**
 * Sample Games Component created for demo purpose
 */
export class GamesComponent implements OnInit {

  /**
   * Games Component screen tittle
   */
  title: String = gamesTitle;
  /**
   * GamesComponent default constructor
   */
  constructor(private logger:LogService) { 
     this.logger.info(`title is ${gamesTitle} !!!!`);
  }

  /**
   * GamesComponent lifecycle default ngOnInit
   */
  ngOnInit() {
  }

}
