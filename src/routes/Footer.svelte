<footer class="footer">
	<p class="footer__copy">&copy; Shindra David {new Date().getFullYear()}. All rights reserved.</p>
	<p class="footer__credits">
		Built with <span style="color: hsl(0, 74%, 50%);"><i class="ri-heart-fill" /></span> and
		<span style="color: hsl(12, 98%, 50%);"><i class="ri-svelte-fill"></i></span>
		by
		<a href="http://twitter.com/shindradavid" target="_blank" rel="noopener noreferrer">
			Shindra David
		</a>
	</p>
</footer>

<style lang="scss">
	.footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
		margin: var(--spacing-lg) 0 0 0;
		padding: var(--spacing-lg) 0;
		border-top: 1px solid var(--clr-outline-secondary-on-bg-primary);
		@include mixins.add-section-lr-padding();

		p {
			margin: 0;
		}

		&__copy {
			font-size: var(--fs-sm);
		}

		&__credits {
			font-size: var(--fs-xs);
		}
	}
</style>
