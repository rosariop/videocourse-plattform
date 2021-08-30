export class Auth {
    static async isTokenValid(data: Object): Promise<boolean> {
        const response = await fetch(`TODO auth endpoint from .env file`, {
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
        return response.json();
      }
}