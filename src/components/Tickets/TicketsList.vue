<template>
    <div>
        <!--<h1 v-for="ticket in tickets" :key="ticket.id">{{ ticket.ticketNumber }}</h1>-->
        <h1>Liste des tickets</h1>
        <v-data-table
            :headers="headers"
            :items="tickets"
            class="elevation-1"
        >
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.ticketNumber}}</td>
                    <td>{{ row.item.title}}</td>
                    <td>{{ row.item.status}}</td>
                    <td>{{ row.item.type}}</td>
                    <td>
                        <router-link :to="`/tickets/`+row.item.id" style="text-decoration: none; color: inherit;">
                            <v-icon>mdi-send</v-icon>
                        </router-link>
                    </td>
                </tr>
            </template>
        </v-data-table>
    </div>
</template>

<script>
  export default {
    name: "TicketsList",
    props : {
      tickets : Array,
    },
    data() {
      return {
        headers : [
          { text : 'Number', value : 'ticketNumber' , align : 'start'},
          { text : 'Title' , value : 'title'},
          { text : 'Status' , value : 'status'},
          { text : 'Type' , value : 'type'},
        ]
      }
    }
  }
</script>

<style scoped>

</style>