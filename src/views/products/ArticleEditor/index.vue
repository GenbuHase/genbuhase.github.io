<template>
	<Section>
		<Article>
			<H2 Class = "subheading subheading-2">概要｜Overview</H2>

			<P>
				このツールを使うと、簡単にブログ形式サイトの記事を執筆することが出来ます。
			</P>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">主な機能｜Features</H2>

			<UL Class = "browser-default">
				<Li>テンプレートHTMLを利用した記事生成</Li>
				<Li>記事のID管理</Li>
				<Li>軽快な動作</Li>
			</UL>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">動作環境・開発環境｜Requirement</H2>

			<UL Class = "browser-default">
				<Li><A Href = "https://nodejs.org/" Target = "_blank">Node.js</A></Li>
			</UL>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">使用方法｜How to Use</H2>

			<Div>
				初回実行時、必要なディレクトリが自動で生成されます。

				<OL>
					<Li>
						<Code>template/index.html</Code>(以下テンプレートHTML)を編集します。<Br />
						テンプレートHTML内では、以下の特殊変数が利用できます。

						<UL Class = "browser-default">
							<Li><Code>${title}</Code> ... 記事タイトル</Li>
							<Li><Code>${createdAt}</Code> ... 記事作成日</Li>
							<Li><Code>${content}</Code> ... 記事内容</Li>
						</UL>
					</Li>

					<Li>Article Editorを起動するために<Code>npm start</Code>を実行します。</Li>
					<Li>起動後、<A Href = "http://localhost:8005" Target = "_blank">http://localhost:8005</A>にアクセスします。</Li>
					<Li>ページの指示に従って執筆しましょう！</Li>
				</OL>
			</Div>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">インストール方法｜Installation</H2>

			<Div>
				以下のコマンドを実行してください。

				<pre Class = "command-line">
					<code Class = "language-shell-session">
						git clone https://github.com/GenbuHase/ArticleEditor.git
						cd ArticleEditor
						npm install
					</code>
				</pre>
			</Div>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">設定 | Config</H2>

			<Div>
				<Code>system/config.js</Code>はコンフィグファイルとなっております。

				<pre Class = "line-numbers">
					<code Class = "language-js">
						{
							PORT: 起動ポート(Number),

							PATH: {
								ARTICLE: 記事データ格納ディレクトリ(String),
								PUBLISH: 生成記事格納ディレクトリ(String),
								MEDIA: 記事別メディア格納ディレクトリ(String),
								COMMONMEDIA: ブログ内メディア格納ディレクトリ(String),
								TEMPLATE: テンプレートHTML格納ディレクトリ(String)
							},

							onCreate: 新規作成時に呼ばれるコールバック関数(Function),
							onDelete: 記事削除時に呼ばれるコールバック関数(Function),
							onSave: 記事保存時に呼ばれるコールバック関数(Function),
							onPublish: 記事生成時に呼ばれるコールバック関数(Function),
							onUpload: メディアアップロード時に呼ばれるコールバック関数(Function)
						}
					</code>
				</pre>
			</Div>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">ダウンロード｜Download</H2>

			<P>
				<A Href = "https://github.com/GenbuHase/ArticleEditor/releases" Target = "_blank">こちら</A>より、リリース版のダウンロードが行えます。
			</P>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">スクリーンショット｜Screenshots</H2>

			<P>
				<img Class = "responsive-img materialboxed" src = "/products/ArticleEditor/assets/Screenshot001.png">
			</P>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">作者｜Author</H2>

			<UL Class = "browser-default">
				<Li><A Href = "https://github.com/GenbuHase" Target = "_blank">Genbu Hase</A></Li>
			</UL>
		</Article>

		<Article>
			<H2 Class = "subheading subheading-2">ライセンス｜License</H2>

			<P>
				<A Href = "https://github.com/GenbuHase/ArticleEditor/blob/master/LICENSE" Target = "_blank">MIT License</A>
			</P>
		</Article>
	</Section>
</template>

<script>
	export default {
		props: {
			product: {
				type: Object,
				default: () => ({})
			}
		}
	};
</script>