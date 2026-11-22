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
		{ title: 'Agregar un cliente por vez', text: 'Nombre, dirección, moneda, condiciones de pago. UNOBIT recuerda el resto, incluido su número de IVA y su idioma preferido.' },
		{ title: 'Redacta la factura', text: 'Indica qué hiciste y el importe. La numeración, los impuestos, las fechas de vencimiento y el archivo PDF se gestionan automáticamente. Duplica lo del mes anterior con un solo clic.' },
		{ title: 'Recibe tu pago y sigue adelante', text: 'Los clientes realizan el pago mediante tarjeta, transferencia bancaria o PayPal desde la página de la factura. UNOBIT registra el pago, envía el recibo y actualiza tus totales.' },
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
		{ name: 'Gratis', price: '$0', period: 'para siempre', line: 'Para tus primeros clientes.', items: ['3 clientes activos', 'Facturas ilimitadas', 'Pagos con tarjeta y bancarios', 'Marca UNOBIT en archivos PDF'], cta: 'Comienza gratis', featured: false },
		{ name: 'Personal', price: '$9', period: 'por mes', line: 'Para un trabajo como profesional independiente.', items: ['Clientes ilimitados', 'Recordatorios automáticos', 'Facturas recurrentes', 'Tu logotipo, sin la marca UNOBIT', 'Seguimiento de gastos'], cta: 'Prueba Personal gratis durante 30 días', featured: true },
		{ name: 'Estudio', price: '$24', period: 'por mes', line: 'Para dos a cinco personas.', items: ['Todo lo de Personal', 'Hasta 5 miembros del equipo', 'Aprobación antes del envío', 'Lista de clientes compartida', 'Soporte prioritario'], cta: 'Habla con nosotros', featured: false },
	],

	testimonials: [
		{ quote: 'Antes dedicaba el primer lunes de cada mes a las facturas. Ahora solo me lleva veinte minutos y, gracias a los recordatorios, ya no tengo que andar persiguiendo a nadie.', name: 'Mara Lindqvist', role: 'Ilustradora, Gothenburg' },
		{ quote: 'El manejo de divisas es la razón por la que me cambié. La mitad de mis clientes están en EE. UU. y yo facturo en euros; el PDF muestra ambos importes y nadie pone pegas.', name: 'Tomás Reyes', role: 'Consultor de software, Lisbon' },
		{ quote: 'Mi contable me preguntó qué estaba utilizando, ya que aquel archivo exportado fue el primero que no tuvo que corregir.', name: 'Priya Natarajan', role: 'Redactor publicitario, Toronto' },
	],

	faq: [
		{ q: '¿Existe un plan gratuito?', a: 'Sí. El plan gratuito es gratis para siempre: hasta 3 clientes activos, facturas ilimitadas y pagos mediante tarjeta o transferencia bancaria. Los archivos PDF incluyen una pequeña mención a UNOBIT en el pie de página.' },
		{ q: '¿Cuánto cuesta UNOBIT una vez que crezco?', a: 'Personal cuesta 9 $ al mes e incluye clientes ilimitados, recordatorios, facturas recurrentes y gastos. Estudio cuesta 24 $ al mes y está pensado para equipos de hasta cinco personas. Ambas opciones incluyen una prueba gratuita de 30 días; no es necesario introducir una tarjeta para empezar.' },
		{ q: '¿Qué métodos de pago pueden utilizar mis clientes?', a: 'Tarjeta (Visa, Mastercard, Amex), transferencia bancaria (con los datos que aparecen en la factura) y PayPal. Los pagos con tarjeta conllevan un coste del 2,9 % + 0,30 $; las transferencias bancarias y los pagos mediante PayPal no suponen ningún coste adicional por parte de UNOBIT.' },
		{ q: '¿Qué monedas son compatibles?', a: '28 divisas, incluidas EUR, USD, GBP, CAD, AUD, JPY, CHF, SEK, NOK, DKK, PLN, CZK, INR, SGD, HKD, NZD, BRL y MXN. Puedes facturar a cada cliente en una moneda distinta.' },
		{ q: '¿Puedo importar clientes y facturas antiguas?', a: 'Es posible importar clientes y facturas desde archivos CSV, así como directamente desde FreshBooks, Wave e Invoice Ninja. Las facturas importadas conservan sus números y fechas originales.' },
		{ q: '¿Gestiona el IVA y el impuesto sobre las ventas?', a: 'Sí. Establece una tarifa predeterminada por cliente, modifícala a nivel de línea e incluye los números de IVA en el PDF. La mención sobre la inversión del sujeto pasivo (aplicable en la UE) se añade automáticamente cuando figuran ambos números de IVA.' },
		{ q: '¿Dónde se almacenan mis datos y puedo dejarlo?', a: 'Los datos se almacenan en la UE (Fráncfort) y cuentan con copias de seguridad diarias. Puedes exportar toda la información en formato CSV o PDF en cualquier momento desde la sección de Configuración; si eliminas tu cuenta, los datos se borrarán en un plazo de 30 días.' },
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
