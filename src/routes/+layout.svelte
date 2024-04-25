<script lang="ts">
	import '../lib/styles/global.scss';
</script>

<svelte:head>
	<meta name="theme-color" content="#16181d" />
	<link rel="stylesheet" href="/remixicon/remixicon.css" />
	<!-- <link rel="manifest" href="manifest.webmanifest" /> -->
	<link rel="alternate" href="/rss.xml" type="application/rss+xml" title="RSS" />
</svelte:head>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about-me">About me</a>
		<a href="/what-i-do">What i do</a>
		<a href="/my-work">My work</a>
		<a href="/blog">Blog</a>
	</nav>
</header>

<slot />

<footer class="footer">
	<div class="footer__misc">
		<p>&copy; Shindra David {new Date().getFullYear()}. All rights reserved.</p>
		<p>
			Built with <span style="color: hsl(0, 74%, 50%);"><i class="ri-heart-fill" /></span> and
			<span style="color: hsl(12, 98%, 50%);"><i class="ri-svelte-fill"></i></span>
			by
			<a href="http://twitter.com/shindradavid" target="_blank" rel="noopener noreferrer">
				Shindra David
			</a>
		</p>
	</div>
</footer>
