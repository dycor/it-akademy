<template>
  <div>
    <TicketsList :tickets="tickets" />
  </div>
</template>

<script>
// @ is an alias to /src
import TicketsList from '@/components/Tickets/TicketsList.vue';
import ticketsService from '@/services/tickets';

export default {
  name: 'Home',
  components: {
    TicketsList,
  },
  data(){
    return {
      tickets : []
    }
  },
  async beforeCreate(){
    const tickets = await ticketsService.getTickets();
    console.log(tickets)
    this.tickets = tickets;
  }
}
</script>
