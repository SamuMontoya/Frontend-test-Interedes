<template>
  <b-modal id="modal" :title="subject.name">
    <b-row class="mx-2 mt-2">
      <label>Username</label>
      <b-form-input type="text" disabled :placeholder="subject.username" />
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Email</label>
      <b-form-input type="text" disabled :placeholder="subject.email" />
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Address</label>
      <b-form-input type="text" disabled :placeholder="subject.address" />
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Phone</label>
      <b-form-input type="text" disabled :placeholder="subject.phone" />
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Website</label>
      <b-form-input type="text" disabled :placeholder="subject.website" />
    </b-row>
    <b-row class="mx-2 mt-2">
      <label>Company</label>
      <b-form-input type="text" disabled :placeholder="subject.company" />
    </b-row>
  </b-modal>
</template>

<script>
export default {
  props: ["subject"],
};
</script>
