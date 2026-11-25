import {
  Calculator,
  UtensilsCrossed,
  Smartphone,
  Target,
  PieChart as PieChartIcon,
  Scale,
  CheckCircle2,
  Salad,
  Beef,
  Sparkles
} from 'lucide-react';
import type { ElementType } from 'react';

export interface PaymentField {
  label: string;
  value: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  fields: PaymentField[];
  instructions: string;
}

export interface SyllabusStep {
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  keyPoints: string[];
  icon: ElementType;
  practicalApplication: string;
}

export interface GoalData {
  id: 'musculo' | 'mantenimiento' | 'grasa';
  title: string;
  subtitle: string;
  badge: string;
  caloriesAdjustment: string;
  targetKcal: number;
  summary: string;
  macroSplit: {
    protein: number;
    carbs: number;
    fat: number;
    grams: {
      protein: number;
      carbs: number;
      fat: number;
    };
  };
  focusKeys: string[];
  suitableFor: string;
  mealExample: {
    title: string;
    description: string;
    macros: string;
  };
}

export interface NutritionCategory {
  id: string;
  name: string;
  subtitle: string;
  icon: ElementType;
  macroFocus: string;
  color: string;
  items: {
    name: string;
    portion: string;
    protein: string;
    carbs: string;
    fats: string;
    calories: string;
    tag: string;
  }[];
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: 'binance',
    name: 'Binance Pay / USDT',
    badge: 'Cripto Instantáneo',
    tagline: 'Sin comisiones bancarias ni esperas',
    description: 'Transferencia directa sin intermediarios mediante Binance Pay o red USDT (TRC20 / BEP20).',
    fields: [
      { label: 'Binance ID / Correo', value: '[TU_BINANCE_ID]' },
      { label: 'Binance Pay ID', value: '[TU_PAY_ID]' },
      { label: 'Red USDT sugerida', value: 'USDT (Red TRC20 o BSC BEP20)' }
    ],
    instructions: 'Envía el importe equivalente y conserva tu TxID o captura de pago para adjuntarla en tu formulario.'
  },
  {
    id: 'zelle',
    name: 'Zelle',
    badge: 'Cuentas en USD',
    tagline: 'Acreditación al instante en EE.UU.',
    description: 'Transferencia bancaria directa en dólares desde tu aplicación bancaria de confianza.',
    fields: [
      { label: 'Correo Zelle', value: '[TU_CORREO_ZELLE]' },
      { label: 'Titular de la cuenta', value: '[NOMBRE_TITULAR_ZELLE]' },
      { label: 'Nota / Memo requerida', value: 'Tu Nombre + Gobierna tus macros' }
    ],
    instructions: 'Recuerda incluir tu nombre en la nota de Zelle para validar tu cupo automáticamente.'
  },
  {
    id: 'paypal',
    name: 'PayPal',
    badge: 'Internacional & Tarjetas',
    tagline: 'Paga con tarjeta o saldo PayPal',
    description: 'Envío internacional seguro con protección y soporte desde cualquier país.',
    fields: [
      { label: 'Correo PayPal / Enlace', value: '[TU_CORREO_PAYPAL]' },
      { label: 'Titular', value: '[NOMBRE_TITULAR_PAYPAL]' },
      { label: 'Modalidad recomendada', value: 'Envío entre amigos o cubrir comisión comercial' }
    ],
    instructions: 'Adjunta el correo desde el cual realizaste la transacción al llenar el registro.'
  },
  {
    id: 'transferencia',
    name: 'Pago Móvil',
    badge: 'Moneda Local',
    tagline: 'Acreditación inmediata en Bs.',
    description: 'Para quienes prefieren operar en moneda nacional mediante Pago Móvil.',
    fields: [
      { label: 'Banco receptor', value: '[NOMBRE_DEL_BANCO]' },
      { label: 'Cédula / Documento', value: '[TITULAR_Y_DOCUMENTO]' },
      { label: 'Teléfono Pago Móvil', value: '[NUMERO_CUENTA_O_TELEFONO]' }
    ],
    instructions: 'Una vez realizado el Pago Móvil, ingresa el número de referencia en el registro para validarlo.'
  }
];

export const SYLLABUS_STEPS: SyllabusStep[] = [
  {
    step: '01',
    title: 'Cálculo metabólico exacto',
    subtitle: 'Calorías según peso, edad y talla',
    badge: 'Metabolismo Basal',
    description: 'Aprenderás a calcular tu Tasa Metabólica Basal (TMB) y Gasto Energético Total Diario (TDEE) empleando fórmulas científicamente validadas, dejando atrás estimaciones arbitrarias.',
    keyPoints: [
      'Ecuaciones Mifflin-St Jeor y Katch-McArdle según tu composición',
      'Determinación real del factor de actividad física (NEAT + EAT)',
      'Establecimiento de tu punto neutro calórico de partida'
    ],
    icon: Calculator,
    practicalApplication: 'Obtendrás tu número de calorías base personalizado en menos de 10 minutos.'
  },
  {
    step: '02',
    title: 'Distribución porcentual a gramos',
    subtitle: 'Multiplicar % macros para obtener gramos',
    badge: 'Macronutrientes',
    description: 'Transformarás los porcentajes calóricos en gramos exactos de proteínas (4 kcal/g), carbohidratos (4 kcal/g) y lípidos (9 kcal/g) con matemática simple y aplicable a cualquier plato.',
    keyPoints: [
      'Optimización de proteína: 1.6 a 2.4 g/kg según masa magra',
      'Piso hormonal de grasas saludables (mínimo 0.7 - 1.0 g/kg)',
      'Distribución de carbohidratos para rendimiento y energía mental'
    ],
    icon: PieChartIcon,
    practicalApplication: 'Sabrás exactamente cuántos gramos de pollo, arroz, avena o aguacate requiere tu día.'
  },
  {
    step: '03',
    title: 'Pesaje real de alimentos',
    subtitle: 'Aprende a pesar en crudo vs. cocido',
    badge: 'Precisión en Báscula',
    description: 'El mayor motivo de estancamiento nutricional radica aquí: los alimentos ganan o pierden agua drásticamente durante la cocción, alterando su densidad calórica hasta en un 200%.',
    keyPoints: [
      'Diferencias críticas en proteínas animales (evaporación hídrica)',
      'Multiplicadores de absorción de agua en arroces, pastas y legumbres',
      'Pesaje correcto de aceites en spray, salsas y condimentos invisibles'
    ],
    icon: UtensilsCrossed,
    practicalApplication: 'Estandarizarás tu medición sin obsesiones, garantizando resultados fiables.'
  },
  {
    step: '04',
    title: 'Dominio de MyFitnessPal',
    subtitle: 'Registro veloz y sin errores',
    badge: 'Digitalización',
    description: 'Configuración profesional de metas personalizadas en MyFitnessPal, filtrado de alimentos verificados (marca verde) y creación de recetas guardadas para registrar tu día en 4 minutos.',
    keyPoints: [
      'Personalización de objetivos en gramos y desactivar ajustes erróneos por pasos',
      'Escaneo inteligente de código de barras y verificación de etiquetas nutricionales',
      'Estrategias para comer en restaurantes y eventos sociales sin descarrilarte'
    ],
    icon: Smartphone,
    practicalApplication: 'La tecnología dejará de ser una carga y se convertirá en tu copiloto diario.'
  },
  {
    step: '05',
    title: 'Adaptación según objetivos',
    subtitle: 'Masa muscular, mantenimiento y déficit',
    badge: 'Periodización',
    description: 'Un sistema dinámico que evoluciona contigo: sabrás exactamente cuándo y cómo ajustar tus calorías según las métricas de tu báscula, fotos y rendimiento en el gimnasio.',
    keyPoints: [
      'Superávit controlado para ganar masa sin acumular exceso de grasa',
      'Periodos de mantenimiento metabólico para consolidar logros fisiológicos',
      'Déficit progresivo sin dañar la tiroides ni sufrir hambre extrema'
    ],
    icon: Target,
    practicalApplication: 'Serás el dueño de tu propio progreso sin depender de dietas prestadas de por vida.'
  }
];

export const GOALS_DATA: GoalData[] = [
  {
    id: 'musculo',
    title: 'Aumento de Masa Muscular',
    subtitle: 'Hipertrofia limpia y superávit controlado',
    badge: 'Superávit Calórico +300 kcal',
    caloriesAdjustment: '+250 a +450 kcal sobre mantenimiento',
    targetKcal: 2650,
    summary: 'Diseñado para crear un entorno anabólico óptimo que maximice la síntesis de proteína miofibrilar minimizando la ganancia de tejido adiposo.',
    macroSplit: {
      protein: 25,
      carbs: 55,
      fat: 20,
      grams: {
        protein: 165,
        carbs: 364,
        fat: 59
      }
    },
    focusKeys: [
      'Aporte glucídico peri-entrenamiento para reponer glucógeno y elevar rendimiento',
      'Ingesta de 1.8 - 2.2 g de proteína por kg de peso corporal',
      'Ganancia ponderal controlada de 0.25% a 0.5% del peso por semana'
    ],
    suitableFor: 'Personas con bajo porcentaje graso que desean ganar fuerza, densidad y masa muscular sólida.',
    mealExample: {
      title: 'Desayuno Anabólico',
      description: 'Avena cocida con proteína de suero, plátano maduro, canela y mantequilla de almendra.',
      macros: '42g Proteína · 78g Carbos · 14g Grasas · 610 kcal'
    }
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento & Recomposición',
    subtitle: 'Rendimiento, salud hormonal y plenitud',
    badge: 'Balance Neutro 0 kcal',
    caloriesAdjustment: '±0 kcal (gasto energético total)',
    targetKcal: 2200,
    summary: 'El estado metabólico ideal para consolidar masa muscular, optimizar marcadores de salud, mejorar rendimiento deportivo y gozar de absoluta flexibilidad.',
    macroSplit: {
      protein: 30,
      carbs: 45,
      fat: 25,
      grams: {
        protein: 165,
        carbs: 248,
        fat: 61
      }
    },
    focusKeys: [
      'Estabilidad del sistema nervioso central y homeostasis energética',
      'Recomposición corporal: ganar músculo y perder grasa al mismo tiempo en atletas intermedios',
      'Libertad psicológica y máxima adherencia sin restricciones alimentarias severas'
    ],
    suitableFor: 'Quienes acaban de salir de una etapa de déficit o buscan un estilo de vida sustentable a largo plazo.',
    mealExample: {
      title: 'Almuerzo Equilibrado',
      description: 'Pechuga a la plancha con quinoa tricolor, aguacate hass y ensalada fresca con aceite de oliva virgen extra.',
      macros: '46g Proteína · 52g Carbos · 18g Grasas · 560 kcal'
    }
  },
  {
    id: 'grasa',
    title: 'Pérdida de Grasa Sostenible',
    subtitle: 'Definición corporal protegiendo músculo',
    badge: 'Déficit Inteligente -400 kcal',
    caloriesAdjustment: '-300 a -500 kcal por debajo de mantenimiento',
    targetKcal: 1800,
    summary: 'Estimulación selectiva de la oxidación de grasa corporal manteniendo intacto el tejido muscular gracias a un ratio proteico alto y alimentos voluminosos saciantes.',
    macroSplit: {
      protein: 35,
      carbs: 40,
      fat: 25,
      grams: {
        protein: 158,
        carbs: 180,
        fat: 50
      }
    },
    focusKeys: [
      'Prioridad proteica (2.0 a 2.4 g/kg) para preservar masa magra y aumentar efecto térmico',
      'Alta densidad de fibra y micronutrientes para anular los picos de ansiedad y hambre',
      'Déficit moderado que evita el frenado adaptativo de la tasa metabólica'
    ],
    suitableFor: 'Personas que buscan reducir porcentaje graso, afinar cintura y verse tonificados sin sufrir un efecto rebote.',
    mealExample: {
      title: 'Cena Saciativa de Definición',
      description: 'Lomo de salmón salvaje o merluza al horno con espárragos, patata asada y hojas verdes aderezadas con limón.',
      macros: '40g Proteína · 32g Carbos · 13g Grasas · 410 kcal'
    }
  }
];

export const NUTRITION_CATEGORIES: NutritionCategory[] = [
  {
    id: 'proteinas',
    name: 'Proteínas Magras',
    subtitle: 'Bloques de construcción muscular y saciedad',
    icon: Beef,
    macroFocus: 'Proteínas (4 kcal/g)',
    color: 'emerald',
    items: [
      { name: 'Pechuga de Pollo', portion: '150g en crudo', protein: '34g', carbs: '0g', fats: '3g', calories: '165 kcal', tag: 'Máxima densidad proteica' },
      { name: 'Salmón Salvaje', portion: '150g en crudo', protein: '30g', carbs: '0g', fats: '15g', calories: '260 kcal', tag: 'Rico en Omega-3 EPA/DHA' },
      { name: 'Huevos Enteros Pasteurisados', portion: '2 unidades L (100g)', protein: '13g', carbs: '1g', fats: '10g', calories: '145 kcal', tag: 'Valor biológico 100' },
      { name: 'Proteína Whey Aislada', portion: '1 scoop (30g)', protein: '26g', carbs: '1g', fats: '0.5g', calories: '115 kcal', tag: 'Rápida absorción peri-entreno' }
    ]
  },
  {
    id: 'carbohidratos',
    name: 'Carbohidratos Complejos',
    subtitle: 'El combustible de alto rendimiento anaeróbico',
    icon: Salad,
    macroFocus: 'Glucógeno (4 kcal/g)',
    color: 'emerald',
    items: [
      { name: 'Avena en Hojuelas', portion: '60g en seco', protein: '8g', carbs: '40g', fats: '4g', calories: '230 kcal', tag: 'Fibra beta-glucano saciante' },
      { name: 'Arroz Jazmín / Basmati', portion: '80g en crudo (200g cocido)', protein: '6g', carbs: '64g', fats: '1g', calories: '290 kcal', tag: 'Digestión limpia' },
      { name: 'Patatas / Batatas', portion: '250g crudas al horno', protein: '5g', carbs: '45g', fats: '0.3g', calories: '210 kcal', tag: 'Índice de saciedad supremo' },
      { name: 'Frutos Rojos (Arándanos)', portion: '150g frescos', protein: '1g', carbs: '18g', fats: '0.5g', calories: '85 kcal', tag: 'Poder antioxidante polifenoles' }
    ]
  },
  {
    id: 'grasas',
    name: 'Grasas Esenciales',
    subtitle: 'Salud hormonal, membranas y absorción de vitaminas',
    icon: Sparkles,
    macroFocus: 'Lípidos (9 kcal/g)',
    color: 'emerald',
    items: [
      { name: 'Aguacate Hass', portion: '100g comestibles', protein: '2g', carbs: '2g netos', fats: '15g', calories: '160 kcal', tag: 'Ácido oleico monoinsaturado' },
      { name: 'Aceite de Oliva Extra Virgen', portion: '15 ml (1 cucharada sopera)', protein: '0g', carbs: '0g', fats: '14g', calories: '125 kcal', tag: 'Oro líquido antiinflamatorio' },
      { name: 'Nueces y Almendras', portion: '30g', protein: '6g', carbs: '4g', fats: '16g', calories: '185 kcal', tag: 'Magnesio y vitamina E' },
      { name: 'Semillas de Chía', portion: '20g', protein: '4g', carbs: '2g netos', fats: '6g', calories: '98 kcal', tag: 'Fibra soluble mucílago' }
    ]
  }
];

export const TRUST_METRICS = [
  { label: 'Metodología Validada', value: '100%', detail: 'Basada en balance energético y ciencia metabólica', icon: CheckCircle2 },
  { label: 'Precisión en Balanza', value: '±1g', detail: 'Estandarización de crudo vs. cocido sin fugas', icon: Scale },
  { label: 'Tiempo en Registrar', value: '< 4 min', detail: 'Integración eficiente con MyFitnessPal', icon: Smartphone },
  { label: 'Fecha Confirmada', value: '18 Ene', detail: 'Lunes 18 de enero de 2027 en directo', icon: Sparkles }
];
