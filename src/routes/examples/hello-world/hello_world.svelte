<script lang="ts">
	import { MjButton, MjColumn, MjSocialElement } from "$lib/components";
	import MjImage from "$lib/components/mj_image.svelte";
	import MjSection from "$lib/components/mj_section.svelte";
	import MjSocial from "$lib/components/mj_social.svelte";
	import MjText from "$lib/components/mj_text.svelte";

	export let name = "World";
</script>

<!-- Company Header -->
<MjSection background-color="#f0f0f0">
	<MjColumn>
		<MjText font-style="italic" font-size="20px" color="#626262">Hello, {name}!</MjText>
	</MjColumn>
</MjSection>

<!-- Image Header -->
<MjSection
	background-url="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
	background-size="cover"
	background-repeat="no-repeat"
	padding="70px 0px"
>
	<MjColumn>
		<MjButton background-color="#F63A4D" href="#">Promotion</MjButton>
	</MjColumn>
</MjSection>

<!-- Introduction Text -->
<MjSection background-color="#fafafa">
	<MjColumn width="400px">
		<MjText font-weight="bold" font-size="20px" color="#626262">My Awesome Text</MjText>
		<MjText color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla
			aliquet mollis faucibus.
		</MjText>
		<MjButton background-color="#F45E43" href="#">Learn more</MjButton>
	</MjColumn>
</MjSection>

<!-- 2 Columns Section -->
<MjSection background-color="white">
	<MjColumn>
		<MjImage
			width="200px"
			src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
		/>
	</MjColumn>
	<MjColumn>
		<MjText font-weight="bold" font-size="20px" color="#626262">Find amazing places</MjText>
		<MjText color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus.
		</MjText>
	</MjColumn>
</MjSection>

<!-- Icons -->
<MjSection background-color="#fbfbfb">
	<MjColumn>
		<MjImage width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png" />
	</MjColumn>
	<MjColumn>
		<MjImage width="100px" src="http://191n.mj.am/img/191n/3s/x01.png" />
	</MjColumn>
	<MjColumn>
		<MjImage width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png" />
	</MjColumn>
</MjSection>

<!-- Socials -->
<MjSection background-color="white">
	<MjColumn>
		<MjSocial font-size="15px" icon-size="20px" mode="horizontal">
			<MjSocialElement name="facebook" href="https://auditee.io/">Facebook</MjSocialElement>
			<MjSocialElement name="linkedin" href="https://auditee.io/">LinkedIn</MjSocialElement>
			<MjSocialElement name="twitter" href="https://auditee.io/">Twitter</MjSocialElement>
		</MjSocial>
	</MjColumn>
</MjSection>
