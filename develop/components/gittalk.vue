<template>
  <div class="gitalk">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
  import md5 from 'md5';
  import Gitalk from 'gitalk';
  import 'gitalk/dist/gitalk.css';
  export default {
    name: 'git-talk',
    data() {
      return {};
    },
    mounted() {
      const commentConfig = {
        clientID: 'acd2fa09352e6a2f5321',
        clientSecret: '80367cab283ee5e7eb29ced87ad1f6a8b933588d',
        repo: 'https://github.com/SheenJs/gh-blogs',
        owner: 'SheenJs',
        admin: ['SheenJs'],
        id: md5(location.pathname),
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    },
  };
</script>
<style lang="less">
  .gitalk {
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
  }
  .gt-container .gt-header-textarea {
    color: #000;
  }
</style>
