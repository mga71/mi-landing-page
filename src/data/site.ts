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
		{ title: 'Gastos y recibos', text: 'Fotografía un recibo con tu teléfono; UNOBIT lo archiva en el cliente o proyecto correspondiente.' },
		{ title: 'Exportaciones listas para fines fiscales', text: 'Exportaciones trimestrales y anuales en formato CSV y PDF que tu contable podrá abrir sin necesidad de hacer preguntas.' },
		{ title: 'Funciona sin conexión', text: 'Bosqueje en un tren, envíe cuando tenga señal. No se pierde nada entre los dos.' },
	],

	pricing: [
		{ name: 'Gratis', price: '$0', period: 'para siempre', line: 'Para tus primeros clientes.', items: ['3 active clients', 'Unlimited invoices', 'Card and bank payments', 'Harbor branding on PDFs'], cta: 'Start free', featured: false },
		{ name: 'Personal', price: '$9', period: 'por mes', line: 'Para un trabajo como profesional independiente.', items: ['Unlimited clients', 'Automatic reminders', 'Recurring invoices', 'Your logo, no Harbor branding', 'Expense tracking'], cta: 'Try Solo free for 30 days', featured: true },
		{ name: 'Estudio', price: '$24', period: 'por mes', line: 'Para dos a cinco personas.', items: ['Everything in Solo', 'Up to 5 team members', 'Approval before sending', 'Shared client list', 'Priority support'], cta: 'Talk to us', featured: false },
	],

	testimonials: [
		{ quote: 'Antes dedicaba el primer lunes de cada mes a las facturas. Ahora solo me lleva veinte minutos y, gracias a los recordatorios, ya no tengo que andar persiguiendo a nadie.', name: 'Mara Lindqvist', role: 'Ilustradora, Gothenburg' },
		{ quote: 'El manejo de divisas es la razón por la que me cambié. La mitad de mis clientes están en EE. UU. y yo facturo en euros; el PDF muestra ambos importes y nadie pone pegas.', name: 'Tomás Reyes', role: 'Consultor de software, Lisbon' },
		{ quote: 'Mi contable me preguntó qué estaba utilizando, ya que aquel archivo exportado fue el primero que no tuvo que corregir.', name: 'Priya Natarajan', role: 'Redactor publicitario, Toronto' },
	],

	faq: [
		{ q: '¿Existe un plan gratuito?', a: 'Yes. The Free plan is free forever: up to 3 active clients, unlimited invoices, card and bank payments. PDFs carry a small Harbor line in the footer.' },
		{ q: '¿Cuánto cuesta UNOBIT una vez que crezco?', a: 'Solo is $9 a month for unlimited clients, reminders, recurring invoices and expenses. Studio is $24 a month for teams of up to five. Both include a 30-day free trial; no card needed to start.' },
		{ q: '¿Qué métodos de pago pueden utilizar mis clientes?', a: 'Card (Visa, Mastercard, Amex), bank transfer with the details printed on the invoice, and PayPal. Card payments cost 2.9% + $0.30; bank transfer and PayPal cost nothing extra from Harbor.' },
		{ q: '¿Qué monedas son compatibles?', a: '28 currencies, including EUR, USD, GBP, CAD, AUD, JPY, CHF, SEK, NOK, DKK, PLN, CZK, INR, SGD, HKD, NZD, BRL and MXN. You can bill each client in a different one.' },
		{ q: '¿Puedo importar clientes y facturas antiguas?', a: 'Clients and invoices import from CSV, and directly from FreshBooks, Wave and Invoice Ninja. Imported invoices keep their original numbers and dates.' },
		{ q: '¿Gestiona el IVA y el impuesto sobre las ventas?', a: 'Yes. Set a default rate per client, override it per line, and include VAT numbers on the PDF. EU reverse-charge wording is added automatically when both VAT numbers are present.' },
		{ q: '¿Dónde se almacenan mis datos y puedo dejarlo?', a: 'Data is stored in the EU (Frankfurt) with daily backups. Export everything as CSV and PDF at any time from Settings; deleting the account removes it within 30 days.' },
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
