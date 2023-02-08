import { GlobalThemeService } from './global.theme.service';


export class GlobalSwitchNetworkService {
  public static instance: GlobalSwitchNetworkService = null;

  constructor(
    private theme: GlobalThemeService) {
    GlobalSwitchNetworkService.instance = this;
  }

  /**
   * Asks user to switch to the elastos network, if this is not the currently active network.
   */
  public async promptSwitchToElastosNetworkIfDifferent(): Promise<boolean> {
    // Make sure the active network is elastos, otherwise, ask user to change
    return true;
  }

  /**
   * Asks user to switch to a different network.
   */


  /**
   * Asks user to switch to the elastos network.
   */

}
