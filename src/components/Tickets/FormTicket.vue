<template>
    <form v-on:submit.prevent="submitForm">
        <div>
            <label>Title</label>
            <input type="text" v-model="title"/>
            <label v-if="errors.title">{{errors.title}}</label>
        </div>
        <div>
            <label>Description</label>
            <input type="text" v-model="description"/>
        </div>
        <div>
            <label>Type</label>
            <select name="type" v-model="type">
                <option value="BUG">BUG</option>
                <option value="FEATURE">FEATURE</option>
            </select>
            <label v-if="errors.type">{{errors.type}}</label>
        </div>
        <div>
            <label>Status</label>
            <select name="status" v-model="status">
                <option value="TODO">TO DO</option>
                <option value="INPROGRESS">IN PROGRESS</option>
                <option value="INREVIEW">IN REVIEW</option>
                <option value="DONE">DONE</option>
            </select>
        </div>
        <div>
            <label>Priority</label>
            <select name="priority" v-model="priority">
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HIGH">HIGH</option>
            </select>
        </div>
        <div>
            <label>Assigned to</label>
            <select name="assignedTo" v-model="assignedTo">
                <option v-for="user in users" :value="user.id" :key="user.id">
                    {{ user.firstname+' '+user.lastname}}
                </option>
            </select>
        </div>
        <div>
            <label>Creator</label>
            <select name="creator" v-model="creator">
                <option v-for="user in users" :value="user.id" :key="user.id">
                    {{ user.firstname+' '+user.lastname }}
                </option>
            </select>
            <label v-if="errors.creator">{{ errors.creator }}</label>
        </div>
        <div>
            <label>Point</label>
            <input type="number" name="point" v-model="point"/>
        </div>
        <button type="submit">Validate</button>
    </form>
</template>

<script>
  import { v4 } from 'uuid';
  export default {
    name: "FormTicket",
    props : { submitCallback : Function},
    data(){
      return {
        users : [],
        errors : {},
        ticketNumber : null,
        title :  null,
        description :  null,
        status :  'TODO',
        assignedTo :  null,
        creator :  null,
        type :  null,
        priority :  null,
        point :  null,
        createdDate :  null,
      }
    },
    methods : {
      submitForm(){
        this.errors = {};

        if(!this.title) this.errors.title = 'Title is required';
        if(!this.type) this.errors.type = 'Type is required';
        if(!this.creator) this.errors.creator = 'Creator is required';

        if(!Object.values(this.errors).length){
          const ticket = {
            id : v4(),
            ticketNumber: Math.floor(Math.random() * (1000 - 100)) + 100,
            title: this.title,
            description: this.description,
            status : this.status,
            assignedTo : this.assignedTo,
            creator : this.creator,
            type : this.type,
            priority : this.priority,
            point : this.point,
            createdDate : new Date()
          };
          this.submitCallback(ticket);
        }
      }
    }
  }
</script>

<style scoped>

</style>