import { Publisher, OrderCreatedEvent, Subjects } from "nats-pkg";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
