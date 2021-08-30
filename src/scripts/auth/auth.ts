import { RequestHelper } from "../utilities/RequestHelper.js";

export class Auth {
    static async isTokenValid(data: String): Promise<boolean> {
        const postBody = {
            // Todo: PostBody for validation endpoint
            "postbody": data
        }
        const response = await RequestHelper.post("http://google.com",postBody);
        if(response.status >= 200 && response.status < 300 ){
            return true;
        }
        return false;
      }
}