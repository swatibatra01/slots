<template>
	<div>
		<div @click="hide=!hide">
            <slot name="trigger"> </slot> 
		</div>
		<slot name="target" v-if="hide">
			
		</slot>

		<slot></slot> <!--  empty slot -->

	</div>
</template>
<script>
	export default{
		data(){
             return {
             	hide:true
             }
		},
	}
</script>
<style type="text/css">
	p{color:red;}
</style>
