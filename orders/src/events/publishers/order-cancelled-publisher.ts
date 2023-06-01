import { Subjects, Publisher, OrderCancelledEvent } from "nats-pkg";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
