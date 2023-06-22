<script lang="ts">
	import { Button, Column, Image, Section, Social, SocialElement, Text } from "$lib";

	export let name = "World";
</script>

<!-- Company Header -->
<Section background-color="#f0f0f0">
	<Column>
		<Text font-style="italic" font-size="20px" color="#626262">Hello, {name}!</Text>
	</Column>
</Section>

<!-- Image Header -->
<Section
	background-url="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
	background-size="cover"
	background-repeat="no-repeat"
	padding="70px 0px"
>
	<Column>
		<Button background-color="#F63A4D" href="#">
			The date is {new Date()}
		</Button>
	</Column>
</Section>

<!-- Introduction Text -->
<Section background-color="#fafafa">
	<Column width="400px">
		<Text font-weight="bold" font-size="20px" color="#626262">My Awesome Text</Text>
		<Text color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla
			aliquet mollis faucibus.
		</Text>
		<Button background-color="#F45E43" href="#">Learn more</Button>
	</Column>
</Section>

<!-- 2 Columns Section -->
<Section background-color="white">
	<Column>
		<Image
			width="200px"
			src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
		/>
	</Column>
	<Column>
		<Text font-weight="bold" font-size="20px" color="#626262">Find amazing places</Text>
		<Text color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus.
		</Text>
	</Column>
</Section>

<!-- Icons -->
<Section background-color="#fbfbfb">
	<Column>
		<Image width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png" />
	</Column>
	<Column>
		<Image width="100px" src="http://191n.mj.am/img/191n/3s/x01.png" />
	</Column>
	<Column>
		<Image width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png" />
	</Column>
</Section>

<!-- Socials -->
<Section background-color="white">
	<Column>
		<Social font-size="15px" icon-size="20px" mode="horizontal">
			<SocialElement name="facebook" href="https://auditee.io/">Facebook</SocialElement>
			<SocialElement name="linkedin" href="https://auditee.io/">LinkedIn</SocialElement>
			<SocialElement name="twitter" href="https://auditee.io/">Twitter</SocialElement>
		</Social>
	</Column>
</Section>
