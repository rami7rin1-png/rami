# ポートフォリオサイト

オンライン秘書向けシンプル・ミニマルなポートフォリオです。

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (デプロイ先)

---

## カスタマイズするファイル

| ファイル | 変更する内容 |
|----------|------------|
| `components/Hero.tsx` | 名前・キャッチコピー |
| `components/About.tsx` | 自己紹介文・スキル一覧 |
| `components/Footer.tsx` | メールアドレス |
| `data/works.ts` | 実績・制作物データ |
| `app/layout.tsx` | サイトタイトル・説明文（SEO） |

---

## ローカルで動かす手順

### 1. Node.js のインストール（まだの場合）

https://nodejs.org/ja/ からインストールしてな。
LTS 版（推奨版）でOKやで。

### 2. 依存パッケージのインストール

```bash
cd /Users/ramitask/Documents/Claude/portfolio
npm install
```

### 3. 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いたら見られるで！

---

## Vercel にデプロイする手順

1. [GitHub](https://github.com) に新しいリポジトリを作って、このフォルダをプッシュ
2. [Vercel](https://vercel.com) にアクセスして「New Project」
3. GitHub リポジトリを選ぶだけで自動デプロイ完了！
4. 独自ドメインもVercelの管理画面から設定できるで

---

## ディレクトリ構成

```
portfolio/
├── app/
│   ├── layout.tsx    # メタデータ・フォント設定
│   ├── page.tsx      # ルートページ
│   └── globals.css   # グローバルCSS
├── components/
│   ├── Hero.tsx      # ファーストビュー
│   ├── About.tsx     # 自己紹介
│   ├── Works.tsx     # 実績一覧
│   └── Footer.tsx    # 連絡先
├── data/
│   └── works.ts      # 実績データ（ここを編集して追加）
└── public/           # 画像など静的ファイル
```
