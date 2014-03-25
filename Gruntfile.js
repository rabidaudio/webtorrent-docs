grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-shell');
grunt.initConfig({
  watch: {
    scripts: {
      files: ['*.md'],
      tasks: ['shell:build', 'shell:run'],
      options: {
        interrupt: true,
      },
    },
  },
  shell: {
    build: {
      options: {
          stdout: true
      },
      command: 'md2html notes.md > index.html'
    },
    run: {
      options: {
        stdout: true
      },
      command: "swank"
    }
  }
});
grunt.registerTask('default', ['watch']);
