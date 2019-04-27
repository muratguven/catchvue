<template>
  <div>
    <div
      class="alert alert-primary"
      role="alert"
      v-if="dataList.length==0"
    >Listelenecek Ürün Bulunamadı!</div>
    <table class="table table-hover" v-if="dataList.length>0">
      <thead>
        <tr>
          <th scope="col">Ürün Kodu</th>
          <th scope="col">Ürün Adı</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataList" :key="item.Id">
          <th scope="row">{{item.Id}}</th>
          <td>{{item.Title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "testlist",
  props: {
    dataList: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      defaultList: []
    };
  }
};
</script>
