<template>
	<div>
		<collapse>
			<button slot="trigger">{{label}}</button>
			<p slot="target">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non repudiandae, enim aperiam modi officiis unde omnis perferendis quia saepe excepturi ad fuga ipsa corrupti qui eius eum expedita hic, recusandae.</p>
			<p>hello</p>
		</collapse>


<!-- for vue-resource -->
        <div>
		<p>{{title}}</p>   
		<button v-on:click.prevent="post">Vue-resource post request</button>
	    </div>
	    <div v-if="submitted">
	    	<h3>Data Submitted in JSON Placeholder</h3>
	    </div>
<!-- for vue-resource -->	


	</div>
</template>

<script type="text/javascript">
import com2 from './component2'
import collapse from './collapse'

export default{
	data(){
		return{
			label:'click',
			title:'vue-resource',  // for vue-resource 
			userId:"20",  // for vue-resource 
			id:"200",    // for vue-resource 
			body:"Hello! This is vue-resource body.",  // for vue-resource 
			submitted:false,  // for vue-resource

		}
	},
	components:{
		com2,
		collapse,
	},

	methods:{
		post:function(){   // for vue-resource 
		// mention where r we posting to , may be a database, but for now we will use JSON Placeholder(very simple REST Api to interact with).
        this.$http.post('https://jsonplaceholder.typicode.com/posts',{
         id:this.id,  // inserting data to fake api i.e jason placeholder
         userId:this.userId,
         title:this.title,
         body:this.body,
        }).then(function(data){
        	this.submitted=true;
        	console.log(data);
        }); 

// for get request check getcomp.vue


		}
	}
}
</script>