import { Injectable } from '@angular/core';

/**
 * Sample Log Service created for demo purpose
 */
@Injectable()
export class LogService {

  constructor() { }

  /**
   * This method creates uniform way to logging message in application
   * Example: INFO - Wed Oct 11 2017 12:49:30 - title is This is Games screen !!!!
   * message - title is This is Games screen !!!!
   * @param message 
   */
  info(message){
		var date = new Date()
		var formattedDate = date.toString().substring(0,24);
		console.log(`INFO - ${formattedDate} - ${message} !!!!`);
	}
}
