<template>
  <div id="test">
    <form class="needs-validation" @submit.prevent="onSubmit">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="productCode">Ürün Kodu</label>
          <input
            type="text"
            class="form-control"
            :class="{'is-valid': Id}"
            
            id="productCode"
            placeholder="Ürün Kodu"
            v-model="Id"
            required
          >

        </div>
        <div class="col-md-4 mb-3">
          <label for="title">Ürün Adı</label>
          <input
            type="text"
            class="form-control"
            :class="{'is-valid': Title}"
            id="title"
            placeholder="Ürün Adı"
            v-model="Title"
            required
          >
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Ürünü Kaydet</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "test",
  data() {
    return {
      Id: null,
      Title: null
     
    };
  },
  methods: {
    onSubmit() {
     
        let formData = {
          Id: this.Id,
          Title: this.Title
        };
        console.log(formData);
        this.$emit("product-submitted", formData);
        this.Id = null;
        this.Title = null;
     
    }
  }
};
</script>