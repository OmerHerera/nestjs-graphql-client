import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('graphql')
  async getGraphql(): Promise<string> {
    return await this.appService.getGraphql();
  }

  @Get('health-check')
  async getHealthCheck(): Promise<string> {
    return 'Is Live !';
  }
}
