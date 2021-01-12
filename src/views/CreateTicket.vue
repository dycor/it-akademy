<template>
    <div>
        <h1>Create Ticket</h1>
        <FormTicket />
    </div>
</template>

<script>
  import FormTicket from '@/components/Tickets/FormTicket';

  export default {
    name: "createTicket",
    components: {FormTicket},
    component : {
      FormTicket
    }
  }
</script>