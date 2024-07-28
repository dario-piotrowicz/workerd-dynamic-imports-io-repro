export default {
	async fetch() {
		const { helloWorldIO } = await import('./module.js');
		return new Response(helloWorldIO);
	},
};
