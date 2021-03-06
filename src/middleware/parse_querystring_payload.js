'use strict';

import querystring from 'querystring';

/**
 * parse json payload
 * @type {}
 */
export default class extends think.middleware.base {
  /**
   * run
   * @return {} []
   */
  run(){
    let http = this.http;
    
    if (!http.req.readable) {
      return;
    }
    
    return http.getPayload().then(payload => {
      http._post = think.extend(http._post, querystring.parse(payload));
    });
  }
}