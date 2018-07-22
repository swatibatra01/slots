<template>
	<div>
<!-- for vue-resource -->
        <div id="show-blog" v-theme:column="'narrow'">  
        	<!-- or use v-theme="'narrow'" for narrow theme-->
        	<!-- use v-theme:column or v-theme to see different effects -->
        	<!-- column is argument here -->
        	<h3>All Blogs Articles</h3>
        	<input type="text" v-model="search" placeholder="Search Blogs" />
        	<!-- if u dont want to search then u can use v-for="blog in Blogs" in below line of code -->
            <div v-for="blog in filteredBlogs" class="single-blog">
               <h2 v-rainbow>{{blog.title | to-uppercase}}</h2><!-- here rainbow is a custom directive -->
               <article>{{blog.body | snippet}}</article>
               <!-- snippet and to-uppercare are userdefined filters , defined in main.js (globally) -->
            </div>	
  
	    </div>
<!-- for vue-resource -->	


	</div>
</template>

<script type="text/javascript">



export default{
	data(){
		return{
			blogs:[],
			search:'',

		}
	},

	computed:{
		filteredBlogs:function(){
			return this.blogs.filter((blog)=>{
				return blog.title.match(this.search);
			});
		}

	},

	created(){
		this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        	this.blogs=data.body.slice(0,10); // to get only  first 10 records
        	console.log(data.body);
        })
	}
}
</script>

<style type="text/css">
	#show-blog{
		max-width: 800px;
		margin: 0 auto;

	}

	.single-blog{
		padding: 20px;
		margin: 20px 0;
		box-sizing: border-box;
		background: #eee;
	}  
</style>
