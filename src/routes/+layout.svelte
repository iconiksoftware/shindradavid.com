<script lang="ts">
	import '../lib/styles/global.scss';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<meta name="theme-color" content="#16181d" />
	<link rel="stylesheet" href="/remixicon/remixicon.css" />
	<!-- <link rel="manifest" href="manifest.webmanifest" /> -->
	<link rel="alternate" href="/rss.xml" type="application/rss+xml" title="RSS" />
</svelte:head>

<Header />
<slot />
<Footer />
