import { HandlerInterface } from "../@shared/handler.interface";
import { ProductCreatedEvent } from "./productCreatedEvent";

export class SendEmailWhenProductIsCreatedHanlder implements HandlerInterface <ProductCreatedEvent>{
    handle(event: ProductCreatedEvent): void {
        console.log(`Email sent about the creation of a new product on a certain ${event.dateTimeOccurred}. The product is called ${event.eventData.name} and has this description ${event.eventData.description} and this price of ${event.eventData.price}`);
    }

}