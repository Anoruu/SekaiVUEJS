import { request } from 'graphql-request';

const endpoint = import.meta.env.VITE_API_KEY

export class Register {
    static async storeUser(data){
        console.log(data)
        const query = `
        mutation {
            createLogin(data: {username: ${JSON.stringify(data.username)}, password: ${JSON.stringify(data.password)}}) {
              id
            }
          }
          `
          request(endpoint, query)
          .then((data)=> console.log(data))
          .catch((error)=> console.error(error))
    }
}
