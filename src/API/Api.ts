import { callFetch } from "../utils/CallFetch";
export const API_ENDPOINT = "https://jsonplaceholder.typicode.com";


export class API {
  static async getPosts() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    return await callFetch(
      `${API_ENDPOINT}/posts`,
      requestOptions
    );
  }

}
