<script lang="ts">
	import { base } from '$app/paths';
	import { WHOAMI } from '$lib/params';
	import CommonPage from '$lib/components/CommonPage.svelte';

	const { title } = WHOAMI;
</script>

<CommonPage {title}>
	<div class="whoami">
		<p class="big">
			Greetings! I'm João Matos, and my journey in the realm of technology ignited at the tender age of 6 when my uncle introduced me to my very first laptop - a Toshiba Satellite A70. My family fondly recalls my early years spent in the server room of my grandfather's company, where I gleefully "assisted" my uncle. While my memories from that time may be somewhat hazy, it's quite possible that my affinity for Linux traces its roots back to those days! 😄
		</p>
		<br />
		<p class="big">
			At the age of 14, I embarked on a self-guided exploration of coding, a journey I've never veered from since. My programming voyage commenced with Python but quickly evolved to encompass the intricacies of more low-level languages like C/C++. My active involvement in the Open Source community has been both rewarding and fulfilling. I've not only contributed to numerous projects but also developed software that continues to be in use, some even within my own academic institution.
		</p>
		<br />
		<p class="big">
			Beyond my tech endeavors, I'm also a man of the arts, thanks to the influence of my father. I have a knack for painting, find solace in writing, and revel in the world of books. This creative side of mine complements my technical skills and fosters a well-rounded perspective.
		</p>
		<br />
		<p class="big">
			My approach to learning complex subjects is characterised by a unique adaptability—I can seamlessly pivot to grasp any language or technology. My innate ability to comprehend intricate concepts led me to the remarkable feat of independently crafting a Blockchain from scratch in C++ at the age of 16/17, among a myriad of other captivating projects. I specialise in low-level systems and network programming, hacking and malware development, and decentralised computing with a focus on Blockchain.
		</p>
		<br />
		<p class="big">
			My experiences within the Open Source sphere have also honed my ability to excel in large team settings and navigate projects with extensive codebases. I'm committed to the art of crafting clean, well-structured code that adheres to best practices, accompanied by meticulous documentation. Furthermore, my affinity for the arts equips me with exceptional communication skills.
		</p>
</CommonPage>
