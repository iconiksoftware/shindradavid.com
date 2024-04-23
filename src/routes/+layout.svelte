<script lang="ts">
	import '../lib/styles/global.scss';
</script>

<svelte:head>
	<meta name="theme-color" content="#16181d" />
	<link rel="stylesheet" href="/remixicon/remixicon.css" />
	<!-- <link rel="manifest" href="manifest.webmanifest" /> -->
	<link rel="alternate" href="rss.xml" type="application/rss+xml" title="RSS" />
</svelte:head>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/about-me">About me</a>
		<a href="/my-work">My work</a>
		<a href="/blog">Blog</a>
	</nav>
</header>

<slot />
