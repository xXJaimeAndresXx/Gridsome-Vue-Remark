<template>
<div style="margin: 0 auto; max-width: 700px;">
    <h1>{{$page.posts.title}}</h1>

    <strong>Author: </strong><span>{{$page.posts.author}}</span>
    <br/>
    <strong>Date: </strong><span>{{$page.posts.created_at}}</span>
    <VueRemarkContent>
        <template v-slot: ad>
            <Ad/>
        </template>
    </VueRemarkContent>
</div>
        
    
</template> 

<page-query>
query Post($id: ID!){
    posts(id: $id){
        title
        author
        created_at
    }
}
</page-query>
<script lang="ts">
import Ad from '../components/Ad.vue'

export default{
    
  components:{
      Ad,
  }
}
</script>

