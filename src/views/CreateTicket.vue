<template>
    <div>
        <h1>Create Ticket</h1>
        <FormTicket :submitCallback="postTicket" />
        <label v-if="error">{{error}}</label>
    </div>
</template>

<script>
  import FormTicket from '@/components/Tickets/FormTicket';
  import ticketsServices from '@/services/tickets';

  export default {
    name: "createTicket",
    components: {FormTicket},
    component : {
      FormTicket
    },
    data(){
      return {
        error : null,
      }
    },
    methods : {
      async postTicket(ticket){
        try {
          await ticketsServices.postTicket(ticket);
          this.$router.push('/');
        } catch (error) {
          this.error = 'Oops error !';
        }
      }
    }
  }
</script>