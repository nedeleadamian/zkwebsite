<template>
    <div class="pdf">
        <pdf
            v-for="i in numPages"
            ref="pdf" 
            :key="i"  
            :src="url" 
            :page="i" />
    </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
    components:{
        pdf
    },
    data(){
        return {
            url:"./static/pdf/1.pdf",
            numPages: null, 
        }
    },
    mounted() {
        this.url = `./static/pdf/1.pdf`,
        this.getNumPages()
    },
    methods: {
        getNumPages() {
            let loadingTask = pdf.createLoadingTask(this.url)
            loadingTask.promise.then(pdf => {
                this.numPages = pdf.numPages
            }).catch(err => {
                console.error('pdf 加载失败', err);
            })
        },
    }
}
</script>
<style scoped>
   .pdf{
     width: 1200px;
     margin:0 auto;
   }
</style>