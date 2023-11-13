import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  // 指定显示这个侧边栏的地址
  "/": [
    "",
    {
      text: "Frontend",
      icon: "chrome",
      // link是点击目录本身跳转的路径,这里文件节点本身不需要跳转，所以注释掉link
      // link: '/Tech/Front-end',
      // childeren要搭配prefix才能正确地显示某一个节点下面的文件结构
      prefix: "Tech/Front-end/",
      children: "structure"
    },
    {
      text: "Backend",
      icon: "back-stage",
      prefix: "Tech/Backend/",
      children: "structure"
    },
    {
      text: "AI",
      icon: "linter",
      prefix: "Tech/AI/",
      children: "structure"
    }
    // {
    //   text: "Tech123",
    //   icon: "laptop-code",
    //   // 显示前缀指定的目录结构
    //   prefix: "Tech/Front-end", 
    //   children: "structure",
    // },
    // {
    //   text: "Articles",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});
