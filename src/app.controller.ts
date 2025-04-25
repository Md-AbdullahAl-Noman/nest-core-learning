import { Controller, Get } from "@nestjs/common";

@Controller("/app")// This is the controller for the app module as whole .this will handle all the routes that are inside this controller
export class AppController {
  @Get("/hello")//manage the different routes and the different methods that can be used to access them
  getHello(): string {
    return "Hello  bro!";
  }
}
