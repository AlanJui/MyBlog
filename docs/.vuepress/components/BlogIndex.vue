<template>
  <div>
    <div class="article" v-for="post in posts">
      <h2>
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      </h2>
      <div class="tags">
        <span>
          <Fa-CalendarAlt color="green" size="2x" />
        </span>
        <span class="publish-date">
          {{formateDate(post.frontmatter.date)}}
        </span>
        &nbsp;&nbsp;<Fa-FileCode color="green" size="2x" />&nbsp;&nbsp;
        <span class="tag" v-for="tag in post.frontmatter.tags">
          {{tag}}
        </span>
      </div>

      <p>{{ post.frontmatter.description }}</p>

      <p>
        <router-link :to="post.path">瀏覽細節⋯⋯⋯⋯</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import moment from "moment";

  export default {
    methods: {
      formateDate(date, format = 'YYYY-MM-DD') {
        return moment(date).format(format);
      }
    },
    computed: {
      posts () {
        return this.$site.pages
          .filter(x => x.path.startsWith('/posts/') && !x.frontmatter.blog_index)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      }
    }
  }
</script>

<style scoped>
  .article {
    margin-bottom: 20px;
    border-left: solid 5px #3eaf7c;
    padding: 20px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
  }

  .tags {
    /*margin-top: 5px;*/
  }

  .tag {
    padding: 5px;
    border-radius: 7px;
    font-size: small;
    background: steelblue;
    margin-right: 5px;
    color: white;
    font-weight: 500;
  }

  .publish-date {
    padding-top: 5px;
    color: steelblue;
    font-weight: bold;
  }
</style>
