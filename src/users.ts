/*
 * Copyright (C) 2017  Universidade de Aveiro, DETI/IEETA, Bioinformatics Group - http://bioinformatics.ua.pt/
 *
 * This file is part of Dicoogle/dicoogle-client-js.
 *
 * Dicoogle/dicoogle-client-js is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Dicoogle/dicoogle-client-js is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Dicoogle.  If not, see <http://www.gnu.org/licenses/>.
 */

import Endpoints from "./endpoints";
import Socket from "./socket";

export default class Users {
  private _socket: Socket;

  /** Create a new user.
   * 
   * @param name the username
   * @param password a password for this user
   * @param isadmin whether to make this user an administrator
   * @param callback the callback function
   */
  public create(name: string, password, isadmin: boolean, callback: (error: Error) => void): void {
    if (isadmin !== true) {
      isadmin = undefined;
    }
    this._socket.request('POST', Endpoints.USER).query({
      username: name,
      password,
      isadmin,
    }).end(callback);
  }

  /** Remove an existing user.
   * 
   * @param name the username
   * @param callback the callback function
   */
  public remove(name: string, callback: (error: Error) => void): void {
    // TODO
  }

  /** List all users in the system.
   * 
   * @param callback the callback function providing the list of users.
   */
  public list(callback: (error: Error, list) => void): void {
    // TODO
  }
}
