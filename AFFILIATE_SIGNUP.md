# 联盟发行商注册与平台申请路径（公开资料汇总）

> **重要**：以下佣金比例与入口来自公开网页 / 第三方目录（约 2025–2026 年披露），**必须在各联盟后台获批后自行核实**。  
> 本仓库**未**注册任何联盟账号，**未**编造登录凭证。  
> 站点联系邮箱：`frank-cps@mail.grokbot.com`  
> 更新日期：2026-10-28（Asia/Shanghai）

---

## 一、主流联盟网络 — 发行商（Publisher）注册入口

| 网络 | 用途简述 | 公开注册 / 介绍入口 |
|------|----------|---------------------|
| **Impact** | The RealReal、Fashionphile 等常见宿主 | https://impact.com/partners/affiliate-partners/ |
| **Awin** | Chrono24（US/UK）等；ShareASale 正整合至 Awin | https://ui.awin.com/publisher-signup/en/awin/ |
| **CJ Affiliate** | Rebag、Vestiaire Collective 等常见宿主 | https://signup.cj.com/member/signup/publisher/ |
| **ShareASale** | 历史宿主之一；多数账号迁往 Awin | https://www.shareasale.com/info/affiliates/ （若不可用请改走 Awin） |

**建议注册顺序（本演示站）：**

1. 先注册 **Impact** + **Awin** + **CJ**（覆盖下列五平台的主流路径）。  
2. 用本静态站 URL（GitHub Pages / Netlify）作为 Media Property 提交审核。  
3. 获批后再逐个申请广告主计划，生成深链替换 `#affiliate-pending`。

---

## 二、各二手奢侈品平台 — 申请路径与约佣金

### 1. The RealReal

| 项 | 公开信息（待核实） |
|----|-------------------|
| 官方介绍页 | https://www.therealreal.com/affiliates |
| 常见网络 | **Impact**（亦有 FlexOffers 等第三方目录记载） |
| 约佣金 | 公开目录差异较大：Impact 常见披露约 **1%–7%** CPS；部分第三方写 **约 5% + 寄售 bounty**。**以 Impact 后台为准。** |
| 申请路径 | ① Impact 注册 Publisher → ② Marketplace 搜索 “The RealReal” → ③ 提交站点（本演示站）→ ④ 获批后开深链 |
| Cookie | 第三方常写约 15–30 天（待核实） |

### 2. Fashionphile

| 项 | 公开信息（待核实） |
|----|-------------------|
| 官方 Influencer / Affiliate 页 | https://www.fashionphile.com/pages/influencer |
| 常见网络 | **Impact**（官网写明经 Impact 报名） |
| 约佣金 | 官网公开：**销售额的 5%**，且**首单额外 $50 bonus**（以 Impact / 官网更新为准） |
| 申请路径 | ① Impact 注册 → ② 经 Fashionphile Influencer 页跳转报名，或在 Impact 内搜索 Fashionphile → ③ 绑定本站 |
| Cookie | 第三方常写约 **30 天**（待核实） |

### 3. Rebag

| 项 | 公开信息（待核实） |
|----|-------------------|
| 合作 / Partner 相关 | https://www.rebag.com/partners （若改版请站内搜索 Affiliates） |
| 常见网络 | 目录记载不一：**CJ** 与历史 **ShareASale** 均有出现；亦有写阶梯约 3%–7% |
| 约佣金 | 第三方常见写法：约 **5%**（低客单）/ **3%**（高客单）或约 **7%** — **互相矛盾，务必后台核实** |
| 申请路径 | ① 优先在 **CJ** 搜索 Rebag 并申请；若无结果再查 Awin/ShareASale 迁移后的广告主 → ② 邮件 `affiliates@rebag.com`（公开资料曾列出）询问当前网络 |
| Cookie | 第三方约 **15–30 天**（待核实） |

### 4. Vestiaire Collective

| 项 | 公开信息（待核实） |
|----|-------------------|
| 常见网络 | **CJ Affiliate**（多家目录记载） |
| 约佣金 | 第三方常见：**最高约 6%** CPS（待核实） |
| 申请路径 | ① CJ 注册 Publisher → ② Advertisers 搜索 “Vestiaire Collective” → ③ 提交本站 URL 与内容说明（比价 + 可持续二手） |
| Cookie | 第三方约 **15 天**（待核实） |

### 5. Chrono24

| 项 | 公开信息（待核实） |
|----|-------------------|
| 品牌 Partner 页（偏经销商，≠联盟） | https://about.chrono24.com/en/partners |
| 联盟网络 | **Awin**（Chrono24 US 程序 ID 公开目录记为 **128225**；UK **128227**） |
| Awin 商家简介 | https://ui.awin.com/merchant-profile/128225 |
| 约佣金 | Awin 简介写 **variable commissions**（新客/老客不同）；**具体 % 仅登录后可见，勿信未经核实的传闻** |
| 申请路径 | ① Awin 注册 Publisher → ② 加入 Chrono24 US（或所在区程序）→ ③ 用深链工具指向具体 listing |
| Cookie / 归因 | Awin 公开页写约 **60 Days** attribution（待核实） |

---

## 三、本站接入清单（获批后）

1. 将 GitHub Pages / Netlify 公网 URL 写入各网络 Media Property。  
2. 为每条示例卡的「去 A 平台看价」替换真实深链（保留 UTM 便于自查）。  
3. 在页脚与免责声明中保持 **Affiliate disclosure**（已有「联盟推广演示站」表述，可按网络要求加强）。  
4. 佣金到账、Cookie、禁止词（商标竞价等）一律以各广告主 Program Terms 为准。

---

## 四、阻塞与合规提醒

- **未登录 `gh`**：本环境无法自动创建 GitHub 仓库 / Pages；需人工部署后才能把 URL 填进联盟申请。  
- **不要**对无 CPS 的平台强行「注册推广号」充数；无联盟计划则本模式不适用。  
- **不要**承诺用户「买入 A 再卖 B 稳赚」；免责声明已覆盖成色 / 鉴定 / 运费 / 平台费。  
- 高客单奢侈品计划审核偏严：站点需有清晰 About、联系方式、示例标注与披露。

