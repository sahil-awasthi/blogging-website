<template>
    <div id="add-blog">        
        <form v-if="!submitted">
            <h2>Add a New Blog Post</h2>
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy.trim="blog.content"></textarea>
            <div id="checkboxes">
                <input type="checkbox" value="food" v-model="blog.categories">
                <label>Food</label>
                <input type="checkbox" value="technology" v-model="blog.categories">
                <label>Technology</label>
                <input type="checkbox" value="india" v-model="blog.categories">
                <label>India</label>
                <input type="checkbox" value="corona" v-model="blog.categories">
                <label>Corona</label>
                <input type="checkbox" value="fashion" v-model="blog.categories">
                <label>Fashion</label>
                <input type="checkbox" value="travel" v-model="blog.categories">
                <label>Travel</label>
            </div>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
            <hr />
            <button v-on:click.prevent="post">Add Blog</button>
        </form>
        <div v-if="submitted">
            <h2>Thanks for adding your post {{blog.author}}</h2>
            <div id="preview">
                <h3>Preview Blog</h3>
                <p>Blog Title: {{blog.title}}</p>
                <p>Blog Content:</p>
                <p>{{blog.content}}</p>
                <p>Blog Categories:</p>
                <ul>
                    <li v-for="category in blog.categories">{{category}}</li>
                </ul>
                <p>Author: {{blog.author}}</p>
                </div>
        </div>
    </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: ['sahil awasthi','rezul sharma'],
            submitted: false
        }
    },
    methods: {
        post: function(){
            this.$http.post('https://vue-blog-c1809.firebaseio.com/posts.json', this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
        }
    }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}
textarea{
    height:200px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
