<template>
	<article>
		<section>
			<SubHeading type = "2">概要｜Overview</SubHeading>

			<p>
				このツールを使うと、簡単にブログ形式サイトの記事を執筆することが出来ます。
			</p>
		</section>

		<section>
			<SubHeading type = "2">主な機能｜Features</SubHeading>

			<ul class = "browser-default">
				<li>テンプレートHTMLを利用した記事生成</li>
				<li>記事のID管理</li>
				<li>軽快な動作</li>
			</ul>
		</section>

		<section>
			<SubHeading type = "2">	動作・開発環境｜Requirement</SubHeading>

			<ul class = "browser-default">
				<li><a href = "https://nodejs.org/" target = "_blank">Node.js</a></li>
			</ul>
		</section>

		<section>
			<SubHeading type = "2">使用方法｜How to Use</SubHeading>

			<div>
				初回実行時、必要なディレクトリが自動で生成されます。

				<ol>
					<li>
						<code>template/index.html</code>(以下テンプレートHTML)を編集します。<br>
						テンプレートHTML内では、以下の特殊変数が利用できます。

						<ul class = "browser-default">
							<li><code>${title}</code> ... 記事タイトル</li>
							<li><code>${createdAt}</code> ... 記事作成日</li>
							<li><code>${content}</code> ... 記事内容</li>
						</ul>
					</li>

					<li>Article Editorを起動するために<code>npm start</code>を実行します。</li>
					<li>起動後、<a href = "http://localhost:8005" target = "_blank">http://localhost:8005</a>にアクセスします。</li>
					<li>ページの指示に従って執筆しましょう！</li>
				</ol>
			</div>
		</section>

		<section>
			<SubHeading type = "2">インストール方法｜Installation</SubHeading>

			<div>
				以下のコマンドを実行してください。

				<pre class = "command-line">
					<code class = "language-shell-session">
						git clone https://github.com/GenbuHase/ArticleEditor.git
						cd ArticleEditor
						npm install
					</code>
				</pre>
			</div>
		</section>

		<section>
			<SubHeading type = "2">設定｜Config</SubHeading>

			<div>
				<code>system/config.js</code>はコンフィグファイルとなっております。

				<pre class = "line-numbers">
					<code class = "language-js">
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
			</div>
		</section>

		<section>
			<SubHeading type = "2">ダウンロード｜Download</SubHeading>

			<p>
				<a href = "https://github.com/GenbuHase/ArticleEditor/releases" target = "_blank">こちら</a>より、リリース版のダウンロードが行えます。
			</p>
		</section>

		<section>
			<SubHeading type = "2">スクリーンショット｜Screenshots</SubHeading>

			<p>
				<!-- TODO: Screenshotの一括表示 -->
				<img class = "responsive-img materialboxed" src = "/products/ArticleEditor/assets/Screenshot001.png">
			</p>
		</section>

		<section>
			<SubHeading type = "2">作者｜Author</SubHeading>

			<ul class = "browser-default">
				<li><a href = "https://github.com/GenbuHase" target = "_blank">Genbu Hase</a></li>
			</ul>
		</section>

		<section>
			<SubHeading type = "2">ライセンス｜License</SubHeading>

			<p>
				<a href = "https://github.com/GenbuHase/ArticleEditor/blob/master/LICENSE" target = "_blank">MIT License</a>
			</p>
		</section>
	</article>
</template>

<script>
	import SubHeading from "@/components/SubHeading";

	export default {
		components: { SubHeading }
	};
</script>