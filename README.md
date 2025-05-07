# Next.js Admin

<div align="center"><strong>Next.js Admin Dashboard Starter Template With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js 15 App Router</div>
<br />
<div align="center">
Github: <a href="https://github.com/murphylan/project">https://github.com/murphylan/project</a>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 15](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Styling - [Tailwind CSS v4](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Auth - [Clerk](https://go.clerk.com/ILdYhn7)
- Tables - [Tanstack Data Tables](https://ui.shadcn.com/docs/components/data-table) • [Dice UI](https://www.diceui.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Command+k interface - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

_If you are looking for a React admin dashboard starter, here is the [repo](https://github.com/murphylan/project)._


## Pages

| Pages                                                                                 | Specifications                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Signup / Signin](https://next-shadcn-dashboard-starter.vercel.app/auth/sign-up)      | Authentication with **Clerk** provides secure authentication and user management with multiple sign-in options including passwordless authentication, social logins, and enterprise SSO - all designed to enhance security while delivering a seamless user experience. |
| [Dashboard (Overview)](https://next-shadcn-dashboard-starter.vercel.app/dashboard)    | Cards with recharts graphs for analytics.Parallel routes in the overview sections with independent loading, error handling, and isolated component rendering .                                                                                                          |
| [Product](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product)         | Tanstack tables with server side searching, filter, pagination by Nuqs which is a Type-safe search params state manager in nextjs                                                                                                                                       |
| [Product/new](https://next-shadcn-dashboard-starter.vercel.app/dashboard/product/new) | A Product Form with shadcn form (react-hook-form + zod).                                                                                                                                                                                                                |
| [Profile](https://next-shadcn-dashboard-starter.vercel.app/dashboard/profile)         | Clerk's full-featured account management UI that allows users to manage their profile and security settings                                                                                                                                                             |
| [Kanban Board](https://next-shadcn-dashboard-starter.vercel.app/dashboard/kanban)     | A Drag n Drop task management board with dnd-kit and zustand to persist state locally.                                                                                                                                                                                  |
| [Not Found](https://next-shadcn-dashboard-starter.vercel.app/dashboard/notfound)      | Not Found Page Added in the root level                                                                                                                                                                                                                                  |
| -                                                                                     | -                                                                                                                                                                                                                                                                       |

## Feature based organization

```plaintext
src/
├── app/ # Next.js App Router directory
│ ├── (auth)/ # Auth route group
│ │ ├── (signin)/
│ ├── (dashboard)/ # Dashboard route group
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ └── page.tsx
│ └── api/ # API routes
│
├── components/ # Shared components
│ ├── ui/ # UI components (buttons, inputs, etc.)
│ └── layout/ # Layout components (header, sidebar, etc.)
│
├── features/ # Feature-based modules
│ ├── feature/
│ │ ├── components/ # Feature-specific components
│ │ ├── actions/ # Server actions
│ │ ├── schemas/ # Form validation schemas
│ │ └── utils/ # Feature-specific utilities
│ │
├── lib/ # Core utilities and configurations
│ ├── auth/ # Auth configuration
│ ├── db/ # Database utilities
│ └── utils/ # Shared utilities
│
├── hooks/ # Custom hooks
│ └── use-debounce.ts
│
├── stores/ # Zustand stores
│ └── dashboard-store.ts
│
└── types/ # TypeScript types
└── index.ts
```

## 1. Getting Started

> [!NOTE]  
> We are using **Next 15** with **React 19**, follow these steps:


```sh
# 1. 克隆空仓库
git clone git@github.com:murphylan/project.git

# 2. 进入目录
cd project

# 3. 在当前目录创建 next.js 项目（--no-git 防止 create-next-app 重置 .git）
npx create-next-app@latest . \
  --typescript \
  --eslint \
  --app \
  --tailwind \
  --use-pnpm \
  --no-git

# 4. 添加文件到 git，并提交
git add .
git commit -m "init: scaffolded next.js app with TypeScript, Tailwind and pnpm"

# 5. 推送到远程
git push origin main
```

## 2. 添加本地字体
使用命令 `pnpm dev` 启动项目，看到控制台出现Error信息：

```console
Failed to download `Geist Mono` from Google Fonts. Using fallback font instead.
Failed to download `Geist` from Google Fonts. Using fallback font instead.
 ✓ Compiled / in 31.2s
 ⚠ [next]/internal/font/google/geist_e531dabc.module.css
Error while requesting resource
There was an issue establishing a connection while requesting https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap.

```
原因如上所述，Next.js 15 默认使用的google字体，下载 `Geist Mono` 字体时失败了。我们将默认字体使用IBM的 [Plex Sans](https://github.com/IBM/plex/tree/master/packages/plex-sans/fonts/complete/woff2)字体替换。

### 2.1. 下载字体文件

访问 IBM Plex 的官方 GitHub 仓库：https://github.com/IBM/plex ，导航到 packages/plex-sans/fonts/complete/ 目录。在 complete 目录下，我们可以找到不同格式的字体文件 (如 .ttf, .woff, .woff2)。建议下载 .woff2 格式，因为它具有更好的压缩和性能。

选择需要的字重 (Thin, ExtraLight, Light, Regular, Text, Medium, SemiBold, Bold) 和斜体样式 (Italic)。将下载的字体文件放在 Next.js 项目的 app/fonts 目录下 (如果 fonts 目录不存在则创建它)。例如：
```
app/fonts/IBMPlexSans-Regular.woff2
app/fonts/IBMPlexSans-Italic.woff2
app/fonts/IBMPlexSans-Bold.woff2
// ... 其他字重和样式
```

### 2.2. 配置字体
我们使用 [next/font/local](https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts) 来加载本地字体，编辑文件 layout.tsx文件，内容如下：

```tsx title="app/layout.tsx"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ibmPlexSans = localFont({
  variable: "--font-ibm-plex",
  fallback: ["system-ui", "arial"],
  src: [
    {
      path: "./fonts/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSans-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
```

使用命令 `pnpm dev` 启动工程时，控制台报错：

```console
Module not found: Can't resolve 'next/font/local/target.css'
unexpected data version

Debug info:

Execution of <ModuleAssetContext as AssetContext>::resolve_asset failed
Execution of resolve failed
Execution of <NextFontLocalResolvePlugin as BeforeResolvePlugin>::before_resolve failed
Execution of get_font_fallbacks failed
unexpected data version
Import map: aliased to module "next" with subpath '/font/local/target.css' inside of [project]/
```
问题原因找到了，
```json
"scripts": {
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
},
```
当去掉 `--turbopack` 参数时，一切正常。

这是Next.js 15 的 Turbopack 在解析本地字体时，未能正确生成或定位 target.css 中间文件，导致模块解析失败。

## 3. 添加 shadcn

在next.js中安装 shadcn的详细步骤见：[shadcn](https://ui.shadcn.com/docs/installation/next)，其中："baseColor" 我们选择 "zinc"。

## 4. 规划项目结构

按照下面的目录结构准备文件夹和文件：

```
📂 app/
├── 📂 @auth/                    # Parallel Routes
│   ├── 📂 (.)login/             # Intercepting Routes
│   │   └── 📜 page.tsx          # 登录模态框
│   └── 📜 default.tsx           # 默认空组件
├── 📂 login/
│   ├── 📜 page.tsx              # 被拦截的登录页面
│   └── 📂 full/
│       └── 📜 page.tsx          # 完整登录页面
├── 📂 components/
│   └── 📜 LoginForm.tsx         # 可复用的登录表单组件
├── 📜 layout.tsx                # 根布局
└── 📜 page.tsx                  # Landing Page

```

其中默认空组件代码如下：

```tsx title="app/@auth/default.tsx"
const defaultPage = () => {
  return null;
}

export default defaultPage
```

其中根布局页面的关键代码如下：
```tsx title="app/layout.tsx"
export default function RootLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <div>{auth}</div>
        {children}
      </body>
    </html>
  );
}
```
让我们解释一下这段 Next.js 的根布局代码：

1. **并行路由（Parallel Routes）**
   - `auth` 参数是通过 Next.js 的并行路由功能传入的
   - 它对应 `app/@auth` 文件夹中的内容
   - `@` 符号表示这是一个并行路由插槽(slot)

2. **工作原理**
   ```plaintext
   app/
   ├── @auth/              # 并行路由插槽
   │   ├── default.tsx     # 默认空组件
   │   └── login/          # 登录相关组件
   └── layout.tsx          # 根布局
   ```

3. **布局结构**
   ```tsx
   <html>
     <body>
       <div>{auth}</div>    {/* 并行路由内容渲染位置 */}
       {children}           {/* 主要页面内容 */}
     </body>
   </html>
   ```

4. **使用场景**
   - 适合实现模态框、侧边栏等独立UI组件
   - 允许同时加载和渲染多个页面
   - 可以实现不同路由状态下的UI切换

例如，当用户访问 `/login` 路径时：
- `children` 显示主登录页面
- `auth` 插槽可能显示一个登录模态框
- 两个组件可以独立加载和渲染

这种结构使得认证相关的UI组件可以与主内容并行存在，提供更灵活的页面布局和交互方式。

其中：app/login/full/page.tsx 文件仅是个示例，可以忽略。



## Zustand
这是一个小巧、快速且可扩展的极简状态管理方案。Zustand 提供了基于 Hook 的便捷 API 接口，既不会产生冗余代码，也不强制约定开发范式，但通过恰到好处的规范设计实现了类似 Flux 的显式状态流。

```tsx
import { create } from 'zustand'

type State = {
  firstName: string
  lastName: string
}

type Action = {
  updateFirstName: (firstName: State['firstName']) => void
  updateLastName: (lastName: State['lastName']) => void
}

// Create your store, which includes both state and (optionally) actions
const usePersonStore = create<State & Action>((set) => ({
  firstName: '',
  lastName: '',
  updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
  updateLastName: (lastName) => set(() => ({ lastName: lastName })),
}))

// In consuming app
function App() {
  // "select" the needed state and actions, in this case, the firstName value
  // and the action updateFirstName
  const firstName = usePersonStore((state) => state.firstName)
  const updateFirstName = usePersonStore((state) => state.updateFirstName)

  return (
    <main>
      <label>
        First name
        <input
          // Update the "firstName" state
          onChange={(e) => updateFirstName(e.currentTarget.value)}
          value={firstName}
        />
      </label>

      <p>
        Hello, <strong>{firstName}!</strong>
      </p>
    </main>
  )
}
```

- https://zustand-demo.pmnd.rs/

## clerk

- https://clerk.com/docs/quickstarts/nextjs?utm_source=shadcn-dashboard&utm_medium=open-source&dub_id=ZgpLLgN7PsCDMjTR

## husky
GitHub hook

```sh
pnpm add --save-dev husky
pnpm exec husky init
```
- https://typicode.github.io/husky/

## nuqs

URL 状态

```sh
pnpm add nuqs
```
- https://nuqs.47ng.com/

## Dice UI

- https://www.diceui.com/docs/utilities/client-only

## kbar
```sh
npm install kbar
```

- https://kbar.vercel.app/


## 参考
- https://github.com/Kiranism/next-shadcn-dashboard-starter?tab=readme-ov-file