import { Publisher, Subjects, TicketUpdatedEvent } from "nats-pkg";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
