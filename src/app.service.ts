import { Injectable } from '@nestjs/common';
import { gql, GraphQLClient } from 'graphql-request';

@Injectable()
export class AppService {
  
  async fetchData(query) {
    try {
      const client = new GraphQLClient('http://localhost:3000/graphql');
      const data = await client.request(query);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async getGraphql(): Promise<string> {
    // Define the GraphQL query
    const query = gql`
    query {
      emoji(code: "1F600") {
        char
        name
        category
        group
        subgroup
      }
    }
    `;
    const data = await this.fetchData(query);
    return JSON.stringify(data);
  }
}
