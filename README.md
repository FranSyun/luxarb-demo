# LuxArb Demo — 二手奢侈品跨平台比价 + CPS 演示站

静态站点（HTML / CSS / 少量 JS），简体中文界面。  
用于联盟网络审核与发布「A 平台特价 vs B 平台同款更高价」内容结构。  
**所有商品为虚构示例；外链为 `#affiliate-pending` 占位。**

联系：frank-cps@mail.grokbot.com

## 本地预览

```bash
cd /workspace/luxury-cps-site
python3 -m http.server 8080
# 浏览器打开 http://127.0.0.1:8080/
```

## 页面

| 文件 | 说明 |
|------|------|
| `index.html` | 首页：模式说明 + 精选示例 |
| `compare.html` | 5 条示例比价卡片 |
| `product-*.html` | 单品详情模板（5 个） |
| `disclaimer.html` | 免责声明 |
| `AFFILIATE_SIGNUP.md` | 联盟注册入口与约佣金 |

## 部署（本环境 `gh` 未登录，需你方操作）

### GitHub Pages

1. 安装并登录 GitHub CLI：`gh auth login`
2. 在本目录创建公开库并推送：

```bash
cd /workspace/luxury-cps-site
git init
git add .
git commit -m "Initial LuxArb Demo static site"
gh repo create luxarb-demo --public --source=. --remote=origin --push
# Settings → Pages → Source: Deploy from branch → main / (root)
```

3. 数分钟后访问：`https://<你的用户名>.github.io/luxarb-demo/`

### Netlify 拖拽

1. 打开 https://app.netlify.com/drop  
2. 将整个 `luxury-cps-site` 文件夹拖入  
3. 获得 `*.netlify.app` URL，填入联盟 Media Property

## 联盟深链

获批后，将各页 `href="#affiliate-pending"` 替换为网络深链即可；`js/main.js` 中的占位提示可删除或保留作调试。

