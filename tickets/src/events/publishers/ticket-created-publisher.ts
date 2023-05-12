import { Publisher, Subjects, TicketCreatedEvent } from "nats-pkg";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
