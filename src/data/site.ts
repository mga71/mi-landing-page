// Everything a visitor reads lives here. Change this file and the whole page follows.
// The AI features read the rendered page, so keep the copy specific: numbers, limits, names.

export const site = {
	name: 'UNOBIT',
	tagline: 'Facturación adaptada a un negocio unipersonal.',
	description:
		'UNOBIT es un software de facturación para trabajadores autónomos y consultores independientes: envía facturas en tu propia moneda, recibe pagos mediante tarjeta o transferencia bancaria y consulta de un vistazo los importes pendientes de cobro.',
	url: 'https://fengyiqicoder.github.io/astro-ai-landing/',
	nav: [
		{ label: 'Cómo funciona', href: '#how' },
		{ label: 'Características', href: '#features' },
		{ label: 'Precios', href: '#pricing' },
		{ label: 'FAQ', href: '#faq' },
	],
	cta: { label: 'Comienza Gratis', href: '#contact' },

	hero: {
		headline: 'Envía la factura. Olvídate de la hoja de cálculo.',
		sub: 'UNOBIT convierte un trabajo en una factura pagada en menos de un minuto, en 28 divisas, con recordatorios que se envían mientras duermes. Diseñado para quienes facturan a cinco clientes, no a quinientos.',
	},

	how: [
		{ title: 'Agregar un cliente por vez', text: 'Nombre, dirección, moneda, condiciones de pago. Harbor recuerda el resto, incluido su número de IVA y su idioma preferido.' },
		{ title: 'Redacta la factura', text: 'Indica qué hiciste y el importe. La numeración, los impuestos, las fechas de vencimiento y el archivo PDF se gestionan automáticamente. Duplica lo del mes anterior con un solo clic.' },
		{ title: 'Recibe tu pago y sigue adelante', text: 'Los clientes realizan el pago mediante tarjeta, transferencia bancaria o PayPal desde la página de la factura. Harbor registra el pago, envía el recibo y actualiza tus totales.' },
	],

	features: [
		{ title: '28 divisas, tus tipos de cambio', text: 'Factura en EUR, USD, GBP, JPY y 24 divisas más. Los tipos de cambio se muestran en el momento de emitir la factura y quedan fijados en el PDF.' },
		{ title: 'Recordatorios automáticos', text: 'Un recordatorio amable 3 días antes de la fecha límite; uno más firme, 7 días después. Redactas el mensaje una sola vez.' },
		{ title: 'Facturas recurrentes', text: 'Los pagos mensuales recurrentes se procesan el día 1 sin que tengas que intervenir. Puedes pausarlos o modificarlos en cualquier momento.' },
		{ title: 'Gastos y recibos', text: 'Photograph a receipt from your phone; Harbor files it against the right client or project.' },
		{ title: 'Exportaciones listas para fines fiscales', text: 'Quarterly and yearly CSV and PDF exports your accountant can open without asking questions.' },
		{ title: 'Funciona sin conexión', text: 'Draft on a train, send when you have signal. Nothing is lost between the two.' },
	],

	pricing: [
		{ name: 'Free', price: '$0', period: 'forever', line: 'For your first clients.', items: ['3 active clients', 'Unlimited invoices', 'Card and bank payments', 'Harbor branding on PDFs'], cta: 'Start free', featured: false },
		{ name: 'Solo', price: '$9', period: 'per month', line: 'For a full freelance workload.', items: ['Unlimited clients', 'Automatic reminders', 'Recurring invoices', 'Your logo, no Harbor branding', 'Expense tracking'], cta: 'Try Solo free for 30 days', featured: true },
		{ name: 'Studio', price: '$24', period: 'per month', line: 'For two to five people.', items: ['Everything in Solo', 'Up to 5 team members', 'Approval before sending', 'Shared client list', 'Priority support'], cta: 'Talk to us', featured: false },
	],

	testimonials: [
		{ quote: 'I used to spend the first Monday of every month on invoices. Now it is twenty minutes, and the reminders mean I no longer chase anyone.', name: 'Mara Lindqvist', role: 'Illustrator, Gothenburg' },
		{ quote: 'The currency handling is the reason I switched. Half my clients are in the US and I bill in EUR; the PDF shows both and nobody argues.', name: 'Tomás Reyes', role: 'Software consultant, Lisbon' },
		{ quote: 'My accountant asked what I was using because the export was the first one she did not have to fix.', name: 'Priya Natarajan', role: 'Copywriter, Toronto' },
	],

	faq: [
		{ q: 'Is there a free plan?', a: 'Yes. The Free plan is free forever: up to 3 active clients, unlimited invoices, card and bank payments. PDFs carry a small Harbor line in the footer.' },
		{ q: 'What does Harbor cost once I grow?', a: 'Solo is $9 a month for unlimited clients, reminders, recurring invoices and expenses. Studio is $24 a month for teams of up to five. Both include a 30-day free trial; no card needed to start.' },
		{ q: 'Which payment methods can my clients use?', a: 'Card (Visa, Mastercard, Amex), bank transfer with the details printed on the invoice, and PayPal. Card payments cost 2.9% + $0.30; bank transfer and PayPal cost nothing extra from Harbor.' },
		{ q: 'Which currencies are supported?', a: '28 currencies, including EUR, USD, GBP, CAD, AUD, JPY, CHF, SEK, NOK, DKK, PLN, CZK, INR, SGD, HKD, NZD, BRL and MXN. You can bill each client in a different one.' },
		{ q: 'Can I import clients and old invoices?', a: 'Clients and invoices import from CSV, and directly from FreshBooks, Wave and Invoice Ninja. Imported invoices keep their original numbers and dates.' },
		{ q: 'Does it handle VAT and sales tax?', a: 'Yes. Set a default rate per client, override it per line, and include VAT numbers on the PDF. EU reverse-charge wording is added automatically when both VAT numbers are present.' },
		{ q: 'Where is my data stored, and can I leave?', a: 'Data is stored in the EU (Frankfurt) with daily backups. Export everything as CSV and PDF at any time from Settings; deleting the account removes it within 30 days.' },
		{ q: '¿Existe una aplicación móvil?', a: 'UNOBIT es una aplicación web que funciona en cualquier teléfono y permite crear borradores sin conexión. Para capturar recibos se utiliza la cámara del teléfono desde el navegador; no es necesario instalar nada.' },
	],

	contact: {
		title: 'Empieza con tres clientes, gratis.',
		text: 'Deja tu correo electrónico y te enviaremos un enlace para iniciar sesión. Sin necesidad de tarjeta ni llamadas de venta.',
		// Apunta esto hacia tu servicio de formularios (Web3Forms, Formspree, Formspark…). Vacío: el formulario indica que se trata de una demostración.
		endpoint: '',
	},

	footer: {
		company: 'UNOBIT Software - Río Cuarto (Córdoba) Argentina',
		links: [
			{ label: 'Privacidad', href: '#' },
			{ label: 'Términos y Condiciones', href: '#' },
			{ label: 'Estado', href: '#' },
		],
	},
};
