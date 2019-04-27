<template>
  <div id="work">
    <div class="row">
      <div class="col-sm-12">
        <Test @product-submitted="addToList" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <TestList :dataList="productList" />
      </div>
    </div>
  </div>
</template>
<script>
import TestList from "@/components/TestList";
import Test from '@/components/Test'
export default {
  name: "work",
   components: {
    TestList,
    Test
  },
  data() {
    return {

      productList:[
        {Id:1, Title:"Ürün - 1"},
        {Id:2, Title:"Ürün - 2"},
        {Id:3, Title:"Ürün - 3"},
        {Id:4, Title:"Ürün - 4"},
        {Id:5, Title:"Ürün - 5"}
      ]

    };
  },
 
  methods:{
    addToList(product){
      this.productList.push(product)
    }
  }
};
</script>