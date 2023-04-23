<script lang="ts">
	import Svemail from "$lib/components";

	export let name = "World";
</script>

<!-- Company Header -->
<Svemail.Section background-color="#f0f0f0">
	<Svemail.Column>
		<Svemail.Text font-style="italic" font-size="20px" color="#626262">Hello, {name}!</Svemail.Text>
	</Svemail.Column>
</Svemail.Section>

<!-- Image Header -->
<Svemail.Section
	background-url="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg"
	background-size="cover"
	background-repeat="no-repeat"
	padding="70px 0px"
>
	<Svemail.Column>
		<Svemail.Button background-color="#F63A4D" href="#">
			The date is {new Date()}
		</Svemail.Button>
	</Svemail.Column>
</Svemail.Section>

<!-- Introduction Text -->
<Svemail.Section background-color="#fafafa">
	<Svemail.Column width="400px">
		<Svemail.Text font-weight="bold" font-size="20px" color="#626262">My Awesome Text</Svemail.Text>
		<Svemail.Text color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla
			aliquet mollis faucibus.
		</Svemail.Text>
		<Svemail.Button background-color="#F45E43" href="#">Learn more</Svemail.Button>
	</Svemail.Column>
</Svemail.Section>

<!-- 2 Columns Section -->
<Svemail.Section background-color="white">
	<Svemail.Column>
		<Svemail.Image
			width="200px"
			src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"
		/>
	</Svemail.Column>
	<Svemail.Column>
		<Svemail.Text font-weight="bold" font-size="20px" color="#626262"
			>Find amazing places</Svemail.Text
		>
		<Svemail.Text color="#525252" line-height={1.75}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna
			efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed
			finibus lectus.
		</Svemail.Text>
	</Svemail.Column>
</Svemail.Section>

<!-- Icons -->
<Svemail.Section background-color="#fbfbfb">
	<Svemail.Column>
		<Svemail.Image width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png" />
	</Svemail.Column>
	<Svemail.Column>
		<Svemail.Image width="100px" src="http://191n.mj.am/img/191n/3s/x01.png" />
	</Svemail.Column>
	<Svemail.Column>
		<Svemail.Image width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png" />
	</Svemail.Column>
</Svemail.Section>

<!-- Socials -->
<Svemail.Section background-color="white">
	<Svemail.Column>
		<Svemail.Social font-size="15px" icon-size="20px" mode="horizontal">
			<Svemail.SocialElement name="facebook" href="https://auditee.io/"
				>Facebook</Svemail.SocialElement
			>
			<Svemail.SocialElement name="linkedin" href="https://auditee.io/"
				>LinkedIn</Svemail.SocialElement
			>
			<Svemail.SocialElement name="twitter" href="https://auditee.io/"
				>Twitter</Svemail.SocialElement
			>
		</Svemail.Social>
	</Svemail.Column>
</Svemail.Section>
