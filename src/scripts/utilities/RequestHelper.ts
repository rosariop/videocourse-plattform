export class RequestHelper {

    static async post(url: String, data: Object): Promise<any> {
        const response = await fetch(`${url}`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data)
        });
        return response;
      }
}