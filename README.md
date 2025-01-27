# chatgpt

## 项目介绍

## 安装依赖

npm install
npm install vue-router

## 启动项目

npm run dev

## 打包项目

npm run build

## 项目结构

index.html: 项目的入口文件。
public:
    favicon.ico: 浏览器的图标
src:
    App.vue: 项目的根组件
    main.ts: 项目的入口文件
    assets:
        chatgptLogo.png: 聊天机器人logo
    router:
        index.ts: 路由配置文件
    components:
        NavigationBar.vue: 导航栏组件
        Chat.vue: 聊天组件
        NavigationBar:
            TopBar.vue: 顶部导航栏组件
            SessionList.vue: 会话列表组件
            UserInfo.vue: 用户信息组件
        Chat:
            DialogBox.vue: 聊天对话框组件
            ModelSelect.vue: 模型选择组件
            DialogBox:
                HomePage.vue: 聊天对话框首页组件
                Demo.vue: 聊天对话框示例组件
                Dialogue:
                    DialogueChat.vue: chatgpt聊天组件
                    DialogueUser.vue: 用户聊天组件