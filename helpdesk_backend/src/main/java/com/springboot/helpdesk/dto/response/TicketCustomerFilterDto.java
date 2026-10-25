package com.springboot.helpdesk.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.springboot.helpdesk.enums.Priority;
import com.springboot.helpdesk.enums.Status;

public record TicketCustomerFilterDto (
    @JsonProperty("ticket_subject")
    String ticketSubject,

    @JsonProperty("priority")
    Priority priority,

    @JsonProperty("customer_name")
    String customerName,

    Status status

) {}
