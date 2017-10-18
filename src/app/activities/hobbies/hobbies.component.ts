import { Component, OnInit } from '@angular/core';

import { LogService } from "../../service/log.service";
import { hobbiesTitle } from "../../properties/properties";

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
/**
 * Sample Hobbies Component created for demo purpose
 */
export class HobbiesComponent implements OnInit {
  /**
   * Hobbies Component screen tittle
   */
  title: String = hobbiesTitle;
  /**
   * HobbiesComponent default constructor
   */
  constructor(private logger:LogService) { 
    this.logger.info(`title is ${hobbiesTitle} !!!!`);
  }

  /**
   * HobbiesComponent lifecycle default ngOnInit
   */
  ngOnInit() {
  }

}
